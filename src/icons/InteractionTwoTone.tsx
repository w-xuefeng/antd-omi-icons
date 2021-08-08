// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const InteractionTwoToneSvg: AntdIconProps['icon'] = {"name":"interaction","theme":"twotone", "icon": function render(primaryColor, secondaryColor) { return { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z", "fill": primaryColor } }, { "tag": "path", "attrs": { "d": "M184 840h656V184H184v656zm114-401.9c0-55.3 44.6-100.1 99.7-100.1h205.8v-53.4c0-5.6 6.5-8.8 10.9-5.3L723.5 365c3.5 2.7 3.5 8 0 10.7l-109.1 85.7c-4.4 3.5-10.9.4-10.9-5.3v-53.4H397.8c-19.6 0-35.5 15.9-35.5 35.6v78.9c0 3.8-3.1 6.8-6.8 6.8h-50.7c-3.8 0-6.8-3-6.8-7v-78.9zm2.6 210.3l109.1-85.7c4.4-3.5 10.9-.4 10.9 5.3v53.4h205.6c19.6 0 35.5-15.9 35.5-35.6v-78.9c0-3.8 3.1-6.8 6.8-6.8h50.7c3.8 0 6.8 3.1 6.8 6.8v78.9c0 55.3-44.6 100.1-99.7 100.1H420.6v53.4c0 5.6-6.5 8.8-10.9 5.3l-109.1-85.7c-3.5-2.7-3.5-8 0-10.5z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M304.8 524h50.7c3.7 0 6.8-3 6.8-6.8v-78.9c0-19.7 15.9-35.6 35.5-35.6h205.7v53.4c0 5.7 6.5 8.8 10.9 5.3l109.1-85.7c3.5-2.7 3.5-8 0-10.7l-109.1-85.7c-4.4-3.5-10.9-.3-10.9 5.3V338H397.7c-55.1 0-99.7 44.8-99.7 100.1V517c0 4 3 7 6.8 7zm-4.2 134.9l109.1 85.7c4.4 3.5 10.9.3 10.9-5.3v-53.4h205.7c55.1 0 99.7-44.8 99.7-100.1v-78.9c0-3.7-3-6.8-6.8-6.8h-50.7c-3.7 0-6.8 3-6.8 6.8v78.9c0 19.7-15.9 35.6-35.5 35.6H420.6V568c0-5.7-6.5-8.8-10.9-5.3l-109.1 85.7c-3.5 2.5-3.5 7.8 0 10.5z", "fill": primaryColor } }] }; }};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-interaction-two-tone']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-interaction-two-tone')
export default class InteractionTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'InteractionTwoTone';
  static tagName = 'o-interaction-two-tone';
  static inheritAttrs = false;
  render(props: Omi.OmiProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={InteractionTwoToneSvg} />;
  };
}