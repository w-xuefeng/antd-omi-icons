import * as allIconDefs from '@ant-design/icons-svg'
import * as path from 'path'
import * as fs from 'fs'
import { promisify } from 'util'
import { template } from 'lodash'
import type { IconDefinition } from '@ant-design/icons-svg/es/types'

const writeFile = promisify(fs.writeFile)

interface IconDefinitionWithIdentifier extends IconDefinition {
  svgIdentifier: string
}

function changeName(name: string) {
  return name.replace(new RegExp(/[A-Z]/, 'g'), (str) => {
    return `-${str.toLocaleLowerCase()}`
  })
}

function walk<T>(fn: (iconDef: IconDefinitionWithIdentifier) => Promise<T>) {
  return Promise.all(
    Object.keys(allIconDefs).map((svgIdentifier) => {
      const iconDef = (allIconDefs as { [id: string]: IconDefinition })[
        svgIdentifier
      ]

      return fn({ svgIdentifier, ...iconDef })
    })
  )
}

async function generateIcons() {
  const iconsDir = path.join(__dirname, '../src/icons')
  try {
    await promisify(fs.access)(iconsDir)
  } catch (err) {
    await promisify(fs.mkdir)(iconsDir)
  }

  const render = template(
    `
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const <%= svgIdentifier %>Svg: AntdIconProps['icon'] = <%= svgInfo %>;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['<%= tagName %>']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('<%= tagName %>')
export default class <%= svgIdentifier %> extends OmiComponent<AntdIconProps> {
  static displayName = '<%= svgIdentifier %>';
  static tagName = '<%= tagName %>';
  static inheritAttrs = false;
  render(props: Omi.OmiProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={<%= svgIdentifier %>Svg} />;
  };
}
`.trim()
  )

  await walk(async ({ svgIdentifier }) => {
    // getSvgInfo
    const { default: svgInfo } = await import(`@ant-design/icons-svg/lib/asn/${svgIdentifier}`)

    let svgInfoString = JSON.stringify(svgInfo)

    if (svgInfo && typeof svgInfo.icon === 'function') {
      const { icon: iconFun, ...otherSvgInfo } = svgInfo
      const otherSvgInfoString = JSON.stringify(otherSvgInfo)
      svgInfoString = `${otherSvgInfoString.substring(0, otherSvgInfoString.length - 1)}, "icon": ${iconFun.toString()}}`
    }

    // generate icon file
    await writeFile(
      path.resolve(__dirname, `../src/icons/${svgIdentifier}.tsx`),
      render({ svgIdentifier, svgInfo: svgInfoString, tagName: `o${changeName(svgIdentifier)}` })
    )
  })

  // generate icon index
  const entryText = Object.keys(allIconDefs)
    .sort()
    .map((svgIdentifier) => {
      return `export { default as ${svgIdentifier} } from './${svgIdentifier}';`
    })
    .join('\n')

  await promisify(fs.appendFile)(
    path.resolve(__dirname, '../src/icons/index.tsx'),
    `
// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
${entryText}
    `.trim()
  )
}

async function generateEntries() {
  const render = template(
    `export { default } from './es/icons/<%= svgIdentifier %>';`.trim()
  )

  await walk(async ({ svgIdentifier }) => {
    // generate `Icon.js` in root folder
    await writeFile(
      path.resolve(__dirname, `../${svgIdentifier}.js`),
      render({
        svgIdentifier,
      })
    )
    // generate `Icon.d.ts` in root folder
    await writeFile(
      path.resolve(__dirname, `../${svgIdentifier}.d.ts`),
      `export { default } from './lib/icons/${svgIdentifier}';`
    )
  })
}

if (process.argv[2] === '--target=icon') {
  generateIcons()
}

if (process.argv[2] === '--target=entry') {
  generateEntries()
}
