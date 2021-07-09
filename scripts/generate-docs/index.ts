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

async function generateDocs() {
  const docsDir = path.join(__dirname, '../../docs')
  try {
    await promisify(fs.access)(docsDir)
  } catch (err) {
    await promisify(fs.mkdir)(docsDir)
  }

  const render = template(docsTPLString)

  // generate icon
  const iconText = Object.keys(allIconDefs)
    .sort()
    .map((svgIdentifier) => {
      const tagName = changeName(svgIdentifier)
      return `\n        <!-- GENERATE BY ./scripts/generate-docs/index.ts -->
        <!-- DON NOT EDIT IT MANUALLY -->
        <div class="icon">
          <div class="icon-svg"><o${tagName} style="font-size: 80px" /></div>
          <div class="icon-content">&lt;o${tagName} /&gt;</div>
        </div>`
    })
    .join('\n')

  await writeFile(
    path.resolve(__dirname, `../../docs/index.html`),
    render({ icons: iconText, version: pkg.version })
  )
}

if (process.argv[2] === '--target=docs') {
  generateDocs()
}
