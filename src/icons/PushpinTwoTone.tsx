// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const PushpinTwoToneSvg: AntdIconProps['icon'] = {"name":"pushpin","theme":"twotone", "icon": function render(primaryColor, secondaryColor) { return { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M474.8 357.7l-24.5 24.5-34.4-3.8c-9.6-1.1-19.3-1.6-28.9-1.6-29 0-57.5 4.7-84.7 14.1-14 4.8-27.4 10.8-40.3 17.9l353.1 353.3a259.92 259.92 0 0030.4-153.9l-3.8-34.4 24.5-24.5L800 415.5 608.5 224 474.8 357.7z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M878.3 392.1L631.9 145.7c-6.5-6.5-15-9.7-23.5-9.7s-17 3.2-23.5 9.7L423.8 306.9c-12.2-1.4-24.5-2-36.8-2-73.2 0-146.4 24.1-206.5 72.3a33.23 33.23 0 00-2.7 49.4l181.7 181.7-215.4 215.2a15.8 15.8 0 00-4.6 9.8l-3.4 37.2c-.9 9.4 6.6 17.4 15.9 17.4.5 0 1 0 1.5-.1l37.2-3.4c3.7-.3 7.2-2 9.8-4.6l215.4-215.4 181.7 181.7c6.5 6.5 15 9.7 23.5 9.7 9.7 0 19.3-4.2 25.9-12.4 56.3-70.3 79.7-158.3 70.2-243.4l161.1-161.1c12.9-12.8 12.9-33.8 0-46.8zM666.2 549.3l-24.5 24.5 3.8 34.4a259.92 259.92 0 01-30.4 153.9L262 408.8c12.9-7.1 26.3-13.1 40.3-17.9 27.2-9.4 55.7-14.1 84.7-14.1 9.6 0 19.3.5 28.9 1.6l34.4 3.8 24.5-24.5L608.5 224 800 415.5 666.2 549.3z", "fill": primaryColor } }] }; }};

@tag('o-pushpin-two-tone')
export default class PushpinTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'PushpinTwoTone';
  static tagName = 'o-pushpin-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PushpinTwoToneSvg} />;
  };
}