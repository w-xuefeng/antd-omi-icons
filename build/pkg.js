import fs from 'fs'

export default () =>
  JSON.parse(fs.readFileSync('package.json', { encoding: 'utf-8' }))
