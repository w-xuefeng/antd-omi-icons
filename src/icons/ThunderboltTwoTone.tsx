// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const ThunderboltTwoToneSvg: AntdIconProps['icon'] = {"name":"thunderbolt","theme":"twotone", "icon": function render(primaryColor, secondaryColor) { return { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M695.4 164.1H470.8L281.2 491.5h157.4l-60.3 241 319.8-305.1h-211z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M848.1 359.3H627.8L825.9 109c4.1-5.3.4-13-6.3-13H436.1c-2.8 0-5.5 1.5-6.9 4L170.1 547.5c-3.1 5.3.7 12 6.9 12h174.4L262 917.1c-1.9 7.8 7.5 13.3 13.3 7.7L853.6 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.3 732.5l60.3-241H281.2l189.6-327.4h224.6L487.1 427.4h211L378.3 732.5z", "fill": primaryColor } }] }; }};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-thunderbolt-two-tone']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-thunderbolt-two-tone')
export default class ThunderboltTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'ThunderboltTwoTone';
  static tagName = 'o-thunderbolt-two-tone';
  static inheritAttrs = false;
  render(props: Omi.OmiProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={ThunderboltTwoToneSvg} />;
  };
}