// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const FlagTwoToneSvg: AntdIconProps['icon'] = {"name":"flag","theme":"twotone", "icon": function render(primaryColor, secondaryColor) { return { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M184 232h368v336H184z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M624 632c0 4.4-3.6 8-8 8H504v73h336V377H624v255z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M880 305H624V192c0-17.7-14.3-32-32-32H184v-40c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v784c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V640h248v113c0 17.7 14.3 32 32 32h416c17.7 0 32-14.3 32-32V337c0-17.7-14.3-32-32-32zM184 568V232h368v336H184zm656 145H504v-73h112c4.4 0 8-3.6 8-8V377h216v336z", "fill": primaryColor } }] }; }};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-flag-two-tone']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-flag-two-tone')
export default class FlagTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'FlagTwoTone';
  static tagName = 'o-flag-two-tone';
  static inheritAttrs = false;
  render(props: Omi.OmiProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={FlagTwoToneSvg} />;
  };
}