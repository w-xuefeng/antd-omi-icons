// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const LayoutTwoToneSvg: AntdIconProps['icon'] = {"name":"layout","theme":"twotone", "icon": function render(primaryColor, secondaryColor) { return { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M384 185h456v136H384zm-200 0h136v656H184zm696-73H144c-17.7 0-32 14.3-32 32v1c0-17.7 14.3-32 32-32h736c17.7 0 32 14.3 32 32v-1c0-17.7-14.3-32-32-32zM384 385h456v456H384z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M880 113H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V145c0-17.7-14.3-32-32-32zM320 841H184V185h136v656zm520 0H384V385h456v456zm0-520H384V185h456v136z", "fill": primaryColor } }] }; }};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-layout-two-tone']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-layout-two-tone')
export default class LayoutTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'LayoutTwoTone';
  static tagName = 'o-layout-two-tone';
  static inheritAttrs = false;
  render(props: Omi.OmiProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={LayoutTwoToneSvg} />;
  };
}