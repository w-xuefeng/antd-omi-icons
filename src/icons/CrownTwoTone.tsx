// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const CrownTwoToneSvg: AntdIconProps['icon'] = {"name":"crown","theme":"twotone", "icon": function render(primaryColor, secondaryColor) { return { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M911.9 283.9v.5L835.5 865c-1 8-7.9 14-15.9 14H204.5c-8.1 0-14.9-6.1-16-14l-76.4-580.6v-.6 1.6L188.5 866c1.1 7.9 7.9 14 16 14h615.1c8 0 14.9-6 15.9-14l76.4-580.6c.1-.5.1-1 0-1.5z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M773.6 810.6l53.9-409.4-139.8 86.1L512 252.9 336.3 487.3l-139.8-86.1 53.8 409.4h523.3zm-374.2-189c0-62.1 50.5-112.6 112.6-112.6s112.6 50.5 112.6 112.6v1c0 62.1-50.5 112.6-112.6 112.6s-112.6-50.5-112.6-112.6v-1z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M512 734.2c61.9 0 112.3-50.2 112.6-112.1v-.5c0-62.1-50.5-112.6-112.6-112.6s-112.6 50.5-112.6 112.6v.5c.3 61.9 50.7 112.1 112.6 112.1zm0-160.9c26.6 0 48.2 21.6 48.2 48.3 0 26.6-21.6 48.3-48.2 48.3s-48.2-21.6-48.2-48.3c0-26.6 21.6-48.3 48.2-48.3z", "fill": primaryColor } }, { "tag": "path", "attrs": { "d": "M188.5 865c1.1 7.9 7.9 14 16 14h615.1c8 0 14.9-6 15.9-14l76.4-580.6v-.5c.3-6.4-6.7-10.8-12.3-7.4L705 396.4 518.4 147.5a8.06 8.06 0 00-12.9 0L319 396.4 124.3 276.5c-5.5-3.4-12.6.9-12.2 7.3v.6L188.5 865zm147.8-377.7L512 252.9l175.7 234.4 139.8-86.1-53.9 409.4H250.3l-53.8-409.4 139.8 86.1z", "fill": primaryColor } }] }; }};

@tag('o-crown-two-tone')
export default class CrownTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'CrownTwoTone';
  static tagName = 'o-crown-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={CrownTwoToneSvg} />;
  };
}