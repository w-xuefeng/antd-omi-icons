// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const MinusSquareTwoToneSvg: AntdIconProps['icon'] = {"name":"minus-square","theme":"twotone", "icon": function render(primaryColor, secondaryColor) { return { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z", "fill": primaryColor } }, { "tag": "path", "attrs": { "d": "M184 840h656V184H184v656zm136-352c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8v-48z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z", "fill": primaryColor } }] }; }};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-minus-square-two-tone']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-minus-square-two-tone')
export default class MinusSquareTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'MinusSquareTwoTone';
  static tagName = 'o-minus-square-two-tone';
  static inheritAttrs = false;
  render(props: Omi.OmiProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={MinusSquareTwoToneSvg} />;
  };
}