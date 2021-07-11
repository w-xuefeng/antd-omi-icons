import * as fs from 'fs'
import * as path from 'path'
import { promisify } from 'util'
import { template } from 'lodash'
import * as allIconDefs from '@ant-design/icons-svg'
import type { IconDefinition } from '@ant-design/icons-svg/es/types'

const docsTPLPath = 'scripts/generate-docs/tpl/_index.ejs'

const readTemplate = (p: string) =>
  fs.readFileSync(path.resolve(p), { encoding: 'utf-8' })

const pkg = JSON.parse(readTemplate('package.json'))

const docsTPLString = readTemplate(docsTPLPath)

const writeFile = promisify(fs.writeFile)

interface IconDefinitionWithIdentifier extends IconDefinition {
  svgIdentifier: string
}

function changeName(name: string) {
  return name.replace(new RegExp(/[A-Z]/, 'g'), (str) => {
    return `-${str.toLocaleLowerCase()}`
  })
}

function copyFavicon(docsDir: string) {
  const fileName = 'favicon.ico'
  const faviconPath = path.join(__dirname, `../../assets/${fileName}`)
  fs.copyFileSync(faviconPath, path.join(docsDir, fileName))
}

async function generateDocs() {
  const docsDir = path.join(__dirname, '../../docs')
  try {
    await promisify(fs.access)(docsDir)
  } catch (err) {
    await promisify(fs.mkdir)(docsDir)
  }

  const render = template(docsTPLString)

  // generate icon
  const iconMap = Object.keys(allIconDefs)
    .sort()
    .map((svgIdentifier) => {
      const tagName = changeName(svgIdentifier)
      return {
        svgIdentifier,
        tagName,
        content: `\n        <!-- GENERATE BY ./scripts/generate-docs/index.ts -->
        <!-- DON NOT EDIT IT MANUALLY -->
        <div class="icon">
          <div class="icon-svg"><o${tagName} /></div>
          <div class="icon-content">&lt;o${tagName} /&gt;</div>
        </div>`,
      }
    })

  const typeTitleMap = [
    {
      icon: `<i class="anticon"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M864 64H160C107 64 64 107 64 160v704c0 53 43 96 96 96h704c53 0 96-43 96-96V160c0-53-43-96-96-96z m-12 800H172c-6.6 0-12-5.4-12-12V172c0-6.6 5.4-12 12-12h680c6.6 0 12 5.4 12 12v680c0 6.6-5.4 12-12 12z"></path></svg></i>`,
      text: 'Outlined',
    },
    {
      icon: '<i class="anticon"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M864 64H160C107 64 64 107 64 160v704c0 53 43 96 96 96h704c53 0 96-43 96-96V160c0-53-43-96-96-96z"></path></svg></i>',
      text: 'Filled',
    },
    {
      icon: '<i class="anticon"><svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor" aria-hidden="true" focusable="false" class=""><path d="M16 512c0 273.932 222.066 496 496 496s496-222.068 496-496S785.932 16 512 16 16 238.066 16 512z m496 368V144c203.41 0 368 164.622 368 368 0 203.41-164.622 368-368 368z"></path></svg></i>',
      text: 'TwoTone',
    },
  ]

  const navs = typeTitleMap
    .map(
      (iconType) =>
        `\n        <!-- GENERATE BY ./scripts/generate-docs/index.ts -->
        <!-- DON NOT EDIT IT MANUALLY -->
        <h5 class="icon-type nav-item">${iconType.icon} ${iconType.text}</h5>`
    )
    .join('\n')

  const iconText = typeTitleMap
    .map((iconType) =>
      [
        `\n        <!-- GENERATE BY ./scripts/generate-docs/index.ts -->
        <!-- DON NOT EDIT IT MANUALLY -->
        <h3 class="icon-type">${iconType.icon} ${iconType.text}</h3>`,
        iconMap
          .filter((icon) => icon.svgIdentifier.endsWith(iconType.text))
          .map((icon) => icon.content)
          .join('\n'),
      ].join('\n')
    )
    .join('\n')

  await writeFile(
    path.resolve(__dirname, `../../docs/index.html`),
    render({ icons: iconText, version: pkg.version, navs })
  )

  copyFavicon(docsDir)
}

if (process.argv[2] === '--target=docs') {
  generateDocs()
}
