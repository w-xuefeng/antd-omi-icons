// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const CloudTwoToneSvg: AntdIconProps['icon'] = {"name":"cloud","theme":"twotone", "icon": function render(primaryColor, secondaryColor) { return { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M791.9 492l-37.8-10-13.8-36.5c-8.6-22.7-20.6-44.1-35.7-63.4a245.73 245.73 0 00-52.4-49.9c-41.1-28.9-89.5-44.2-140-44.2s-98.9 15.3-140 44.2a245.6 245.6 0 00-52.4 49.9 240.47 240.47 0 00-35.7 63.4l-13.9 36.6-37.9 9.9a125.7 125.7 0 00-66.1 43.7A123.1 123.1 0 00140 612c0 33.1 12.9 64.3 36.3 87.7 23.4 23.4 54.5 36.3 87.6 36.3h496.2c33.1 0 64.2-12.9 87.6-36.3A123.3 123.3 0 00884 612c0-56.2-37.8-105.5-92.1-120z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M811.4 418.7C765.6 297.9 648.9 212 512.2 212S258.8 297.8 213 418.6C127.3 441.1 64 519.1 64 612c0 110.5 89.5 200 199.9 200h496.2C870.5 812 960 722.5 960 612c0-92.7-63.1-170.7-148.6-193.3zm36.3 281a123.07 123.07 0 01-87.6 36.3H263.9c-33.1 0-64.2-12.9-87.6-36.3A123.3 123.3 0 01140 612c0-28 9.1-54.3 26.2-76.3a125.7 125.7 0 0166.1-43.7l37.9-9.9 13.9-36.6c8.6-22.8 20.6-44.1 35.7-63.4a245.6 245.6 0 0152.4-49.9c41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.2c19.9 14 37.5 30.8 52.4 49.9 15.1 19.3 27.1 40.7 35.7 63.4l13.8 36.5 37.8 10c54.3 14.5 92.1 63.8 92.1 120 0 33.1-12.9 64.3-36.3 87.7z", "fill": primaryColor } }] }; }};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-cloud-two-tone']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-cloud-two-tone')
export default class CloudTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'CloudTwoTone';
  static tagName = 'o-cloud-two-tone';
  static inheritAttrs = false;
  render(props: Omi.OmiProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={CloudTwoToneSvg} />;
  };
}