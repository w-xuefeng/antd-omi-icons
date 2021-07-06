import path from 'path'

export const indexEntry = './src/index.ts'
export const extensions = ['.js', '.ts', '.tsx']
export const iconPath = path.resolve('src/icons')
export const iconTargetPath = (format) => `lib/${format}/icons`

export const config = {
  indexEntry,
  extensions,
  iconPath,
  iconTargetPath,
}

export default config
