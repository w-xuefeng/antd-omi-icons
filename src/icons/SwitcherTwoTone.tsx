// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const SwitcherTwoToneSvg: AntdIconProps['icon'] = {"name":"switcher","theme":"twotone", "icon": function render(primaryColor, secondaryColor) { return { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M184 840h528V312H184v528zm116-290h296v64H300v-64z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M880 112H264c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h576v576c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V144c0-17.7-14.3-32-32-32z", "fill": primaryColor } }, { "tag": "path", "attrs": { "d": "M752 240H144c-17.7 0-32 14.3-32 32v608c0 17.7 14.3 32 32 32h608c17.7 0 32-14.3 32-32V272c0-17.7-14.3-32-32-32zm-40 600H184V312h528v528z", "fill": primaryColor } }, { "tag": "path", "attrs": { "d": "M300 550h296v64H300z", "fill": primaryColor } }] }; }};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-switcher-two-tone']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-switcher-two-tone')
export default class SwitcherTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'SwitcherTwoTone';
  static tagName = 'o-switcher-two-tone';
  static inheritAttrs = false;
  render(props: Omi.OmiProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={SwitcherTwoToneSvg} />;
  };
}