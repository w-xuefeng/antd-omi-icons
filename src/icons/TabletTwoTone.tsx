// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const TabletTwoToneSvg: AntdIconProps['icon'] = {"name":"tablet","theme":"twotone", "icon": function render(primaryColor, secondaryColor) { return { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M800 64H224c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h576c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm-8 824H232V136h560v752z", "fill": primaryColor } }, { "tag": "path", "attrs": { "d": "M232 888h560V136H232v752zm280-144c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M472 784a40 40 0 1080 0 40 40 0 10-80 0z", "fill": primaryColor } }] }; }};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-tablet-two-tone']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-tablet-two-tone')
export default class TabletTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'TabletTwoTone';
  static tagName = 'o-tablet-two-tone';
  static inheritAttrs = false;
  render(props: Omi.OmiProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={TabletTwoToneSvg} />;
  };
}