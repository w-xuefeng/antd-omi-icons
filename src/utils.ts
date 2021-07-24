import { h } from 'omi'
import { AbstractNode, IconDefinition } from '@ant-design/icons-svg/lib/types'
import { generate as generateColor } from '@ant-design/colors'

export function warn(valid: boolean, message: string): void {
  // Support uglify
  if (
    process.env.NODE_ENV !== 'production' &&
    !valid &&
    console !== undefined
  ) {
    console.error(`Warning: ${message}`)
  }
}

export function warning(valid: boolean, message: string): void {
  warn(valid, `[antd-icons-omi] ${message}`)
}

export function isIconDefinition(target: any): target is IconDefinition {
  return target && (
    typeof target === 'object' &&
    typeof target.name === 'string' &&
    typeof target.theme === 'string' &&
    (typeof target.icon === 'object' || typeof target.icon === 'function')
  )
}

export function normalizeAttrs(attrs: Attrs = {}): Attrs {
  return Object.keys(attrs).reduce((acc: Attrs, key) => {
    const val = attrs[key]
    switch (key) {
      case 'class':
        acc.className = val
        delete acc.class
        break
      default:
        acc[key] = val
    }
    return acc
  }, {})
}
export interface Attrs {
  [key: string]: string
}
export type StringKeyOf<T> = Extract<keyof T, string>
export type EventHandlers<E> = {
  [K in StringKeyOf<E>]?: E[K] extends () => any
    ? E[K]
    : (payload: E[K]) => void
}
export function generate(
  node: AbstractNode,
  key: string,
  rootProps?: { [key: string]: any } | false
): any {
  if (!rootProps) {
    return h(
      node.tag,
      { key, ...node.attrs },
      (node.children || []).map((child, index) =>
        generate(child, `${key}-${node.tag}-${index}`)
      )
    )
  }
  return h(
    node.tag,
    {
      key,
      ...rootProps,
      ...node.attrs,
    },
    (node.children || []).map((child, index) =>
      generate(child, `${key}-${node.tag}-${index}`)
    )
  )
}

export function getSecondaryColor(primaryColor: string): string {
  // choose the second color
  return generateColor(primaryColor)[0]
}

export function normalizeTwoToneColors(
  twoToneColor: string | [string, string] | undefined
): string[] {
  if (!twoToneColor) {
    return []
  }

  return Array.isArray(twoToneColor) ? twoToneColor : [twoToneColor]
}

// These props make sure that the SVG behaviours like general text.
// Reference: https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
export const svgBaseProps = {
  width: '1em',
  height: '1em',
  fill: 'currentColor',
  'aria-hidden': 'true',
  focusable: 'false',
} as any

export const iconStyles = `
svg.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

svg.anticon > * {
  line-height: 1;
}

svg.anticon svg {
  display: inline-block;
}

svg.anticon::before {
  display: none;
}

svg.anticon .anticon-icon {
  display: block;
}

svg.anticon[tabindex] {
  cursor: pointer;
}

svg.anticon-spin::before,
svg.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`
