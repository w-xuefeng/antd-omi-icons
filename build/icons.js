import glob from 'glob'
import fs from 'fs'
import { iconPath } from './config.js'

export const getIcons = () => {
  const source = []
  const dir = []
  glob.sync(`${iconPath}/**`).forEach((pathname) => {
    const tmp = pathname.split('/')
    const [name, ext] = tmp[tmp.length - 1].split('.')
    fs.statSync(pathname).isFile()
      ? source.push({
          path: pathname,
          name,
          ext,
        })
      : dir.push({
          path: pathname,
          name: tmp[tmp.length - 1],
        })
  })
  return { source, dir }
}

export const iconsEntries = () => {
  const { source } = getIcons()
  return source
}

export default iconsEntries
