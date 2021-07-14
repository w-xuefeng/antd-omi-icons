// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const BankTwoToneSvg: AntdIconProps['icon'] = {"name":"bank","theme":"twotone", "icon": function render(primaryColor, secondaryColor) { return { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M240.9 393.9h542.2L512 196.7z", "fill": secondaryColor } }, { "tag": "path", "attrs": { "d": "M894 462c30.9 0 43.8-39.7 18.7-58L530.8 126.2a31.81 31.81 0 00-37.6 0L111.3 404c-25.1 18.2-12.2 58 18.8 58H192v374h-72c-4.4 0-8 3.6-8 8v52c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-52c0-4.4-3.6-8-8-8h-72V462h62zM381 836H264V462h117v374zm189 0H453V462h117v374zm190 0H642V462h118v374zM240.9 393.9L512 196.7l271.1 197.2H240.9z", "fill": primaryColor } }] }; }};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-bank-two-tone']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-bank-two-tone')
export default class BankTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'BankTwoTone';
  static tagName = 'o-bank-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={BankTwoToneSvg} />;
  };
}