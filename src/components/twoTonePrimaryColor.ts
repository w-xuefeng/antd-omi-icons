import IconBase from './IconBase'
import { normalizeTwoToneColors } from '../utils'
import type { TwoToneColor } from './types'

export function setTwoToneColor(twoToneColor: TwoToneColor): void {
  const [primaryColor, secondaryColor] = normalizeTwoToneColors(twoToneColor)
  return IconBase.setTwoToneColors({
    primaryColor,
    secondaryColor,
  })
}

export function getTwoToneColor(): TwoToneColor {
  const colors = IconBase.getTwoToneColors()
  if (!colors.calculated) {
    return colors.primaryColor
  }
  return [colors.primaryColor, colors.secondaryColor!]
}
