import glob from 'glob'
import fs from 'fs'

export const getFiles = (path) => {
  const source = []
  const dir = []
  glob.sync(`${path}/**`).forEach((pathname) => {
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
