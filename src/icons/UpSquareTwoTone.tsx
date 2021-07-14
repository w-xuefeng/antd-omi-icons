// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const UpSquareTwoToneSvg: AntdIconProps['icon'] = {"name":"up-square","theme":"twotone", "icon": function render(primaryColor, secondaryColor) { return { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z", "fill": primaryColor } }, { "tag": "path", "attrs": { "d": "M184 840h656V184H184v656zm143.5-228.7l178-246c3.2-4.4 9.7-4.4 12.9 0l178 246c3.9 5.3.1 12.7-6.4 12.7h-46.9c-10.2 0-19.9-4.9-25.9-13.2L512 465.4 406.8 610.8c-6 8.3-15.6 13.2-25.9 13.2H334c-6.5 0-10.3-7.4-6.5-12.7z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M334 624h46.9c10.3 0 19.9-4.9 25.9-13.2L512 465.4l105.2 145.4c6 8.3 15.7 13.2 25.9 13.2H690c6.5 0 10.3-7.4 6.4-12.7l-178-246a7.95 7.95 0 00-12.9 0l-178 246c-3.8 5.3 0 12.7 6.5 12.7z", "fill": primaryColor } }] }; }};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-up-square-two-tone']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-up-square-two-tone')
export default class UpSquareTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'UpSquareTwoTone';
  static tagName = 'o-up-square-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={UpSquareTwoToneSvg} />;
  };
}