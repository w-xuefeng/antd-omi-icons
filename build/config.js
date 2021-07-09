import path from 'path'

export const indexEntry = './src/index.ts'
export const extensions = ['.js', '.ts', '.tsx']
export const iconPath = path.resolve('src/icons')
export const componentPath = path.resolve('src/components')
export const iconTargetPath = (format) => `lib/${format}/icons`
export const componentTargetPath = (format) => `lib/${format}/components`

export const config = {
  indexEntry,
  extensions,
  iconPath,
  componentPath,
  iconTargetPath,
}

export default config
