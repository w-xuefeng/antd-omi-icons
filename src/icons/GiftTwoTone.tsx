// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const GiftTwoToneSvg: AntdIconProps['icon'] = {"name":"gift","theme":"twotone", "icon": function render(primaryColor, secondaryColor) { return { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M546 378h298v104H546zM228 550h250v308H228zm-48-172h298v104H180zm366 172h250v308H546z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M880 310H732.4c13.6-21.4 21.6-46.8 21.6-74 0-76.1-61.9-138-138-138-41.4 0-78.7 18.4-104 47.4-25.3-29-62.6-47.4-104-47.4-76.1 0-138 61.9-138 138 0 27.2 7.9 52.6 21.6 74H144c-17.7 0-32 14.3-32 32v200c0 4.4 3.6 8 8 8h40v344c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V550h40c4.4 0 8-3.6 8-8V342c0-17.7-14.3-32-32-32zM478 858H228V550h250v308zm0-376H180V378h298v104zm0-176h-70c-38.6 0-70-31.4-70-70s31.4-70 70-70 70 31.4 70 70v70zm68-70c0-38.6 31.4-70 70-70s70 31.4 70 70-31.4 70-70 70h-70v-70zm250 622H546V550h250v308zm48-376H546V378h298v104z", "fill": primaryColor } }] }; }};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-gift-two-tone']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-gift-two-tone')
export default class GiftTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'GiftTwoTone';
  static tagName = 'o-gift-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={GiftTwoToneSvg} />;
  };
}