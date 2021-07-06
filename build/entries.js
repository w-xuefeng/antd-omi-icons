import { iconPath, componentPath } from './config.js'
import { getFiles } from './utils.js'

export const iconsEntries = () => getFiles(iconPath).source
export const componentsEntries = () => getFiles(componentPath).source
