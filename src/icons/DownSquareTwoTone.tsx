// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const DownSquareTwoToneSvg: AntdIconProps['icon'] = {"name":"down-square","theme":"twotone", "icon": function render(primaryColor, secondaryColor) { return { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z", "fill": primaryColor } }, { "tag": "path", "attrs": { "d": "M184 840h656V184H184v656zm150-440h46.9c10.3 0 19.9 4.9 25.9 13.2L512 558.6l105.2-145.4c6-8.3 15.7-13.2 25.9-13.2H690c6.5 0 10.3 7.4 6.4 12.7l-178 246a7.95 7.95 0 01-12.9 0l-178-246c-3.8-5.3 0-12.7 6.5-12.7z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M505.5 658.7c3.2 4.4 9.7 4.4 12.9 0l178-246c3.9-5.3.1-12.7-6.4-12.7h-46.9c-10.2 0-19.9 4.9-25.9 13.2L512 558.6 406.8 413.2c-6-8.3-15.6-13.2-25.9-13.2H334c-6.5 0-10.3 7.4-6.5 12.7l178 246z", "fill": primaryColor } }] }; }};

@tag('o-down-square-two-tone')
export default class DownSquareTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'DownSquareTwoTone';
  static tagName = 'o-down-square-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={DownSquareTwoToneSvg} />;
  };
}