// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const BellTwoToneSvg: AntdIconProps['icon'] = {"name":"bell","theme":"twotone", "icon": function render(primaryColor, secondaryColor) { return { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M512 220c-55.6 0-107.8 21.6-147.1 60.9S304 372.4 304 428v340h416V428c0-55.6-21.6-107.8-60.9-147.1S567.6 220 512 220zm280 208c0-141.1-104.3-257.8-240-277.2v.1c135.7 19.4 240 136 240 277.1zM472 150.9v-.1C336.3 170.2 232 286.9 232 428c0-141.1 104.3-257.7 240-277.1z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M816 768h-24V428c0-141.1-104.3-257.7-240-277.1V112c0-22.1-17.9-40-40-40s-40 17.9-40 40v38.9c-135.7 19.4-240 136-240 277.1v340h-24c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h216c0 61.8 50.2 112 112 112s112-50.2 112-112h216c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM512 888c-26.5 0-48-21.5-48-48h96c0 26.5-21.5 48-48 48zm208-120H304V428c0-55.6 21.6-107.8 60.9-147.1S456.4 220 512 220c55.6 0 107.8 21.6 147.1 60.9S720 372.4 720 428v340z", "fill": primaryColor } }] }; }};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-bell-two-tone']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-bell-two-tone')
export default class BellTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'BellTwoTone';
  static tagName = 'o-bell-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={BellTwoToneSvg} />;
  };
}