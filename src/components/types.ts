import type { IconDefinition } from '@ant-design/icons-svg/lib/types'

export type TwoToneColor = string | [string, string]

export interface IconProps {
  icon: IconDefinition
  class?: string
  onClick?: (e?: Event) => void
  className?: string
  primaryColor?: string // only for two-tone
  secondaryColor?: string // only for two-tone
  focusable?: string
}

export interface TwoToneColorPaletteSetter {
  primaryColor: string
  secondaryColor?: string
}

export interface TwoToneColorPalette extends TwoToneColorPaletteSetter {
  calculated?: boolean // marker for calculation
}

export interface IconBaseProps extends Omit<JSX.HTMLAttributes, 'icon'> {
  spin?: boolean | string
  rotate?: number
}

export interface AntdIconProps extends IconBaseProps {
  twoToneColor?: TwoToneColor
}

export interface IconComponentProps extends IconBaseProps {
  viewBox?: string
  component?: Omi.WeElementConstructor
  ariaLabel?: string
}

export interface IconFontProps extends IconBaseProps {
  type: string
}

export interface AntdIconComponentProps extends AntdIconProps {
  icon: IconDefinition
}

export interface CustomIconComponentProps {
  width: string | number
  height: string | number
  fill: string
  viewBox?: string
}
