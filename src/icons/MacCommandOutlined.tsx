// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const MacCommandOutlinedSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"}},{"tag":"path","attrs":{"d":"M370.8 554.4c-54.6 0-98.8 44.2-98.8 98.8s44.2 98.8 98.8 98.8 98.8-44.2 98.8-98.8v-42.4h84.7v42.4c0 54.6 44.2 98.8 98.8 98.8s98.8-44.2 98.8-98.8-44.2-98.8-98.8-98.8h-42.4v-84.7h42.4c54.6 0 98.8-44.2 98.8-98.8 0-54.6-44.2-98.8-98.8-98.8s-98.8 44.2-98.8 98.8v42.4h-84.7v-42.4c0-54.6-44.2-98.8-98.8-98.8S272 316.2 272 370.8s44.2 98.8 98.8 98.8h42.4v84.7h-42.4zm42.4 98.8c0 23.4-19 42.4-42.4 42.4s-42.4-19-42.4-42.4 19-42.4 42.4-42.4h42.4v42.4zm197.6-282.4c0-23.4 19-42.4 42.4-42.4s42.4 19 42.4 42.4-19 42.4-42.4 42.4h-42.4v-42.4zm0 240h42.4c23.4 0 42.4 19 42.4 42.4s-19 42.4-42.4 42.4-42.4-19-42.4-42.4v-42.4zM469.6 469.6h84.7v84.7h-84.7v-84.7zm-98.8-56.4c-23.4 0-42.4-19-42.4-42.4s19-42.4 42.4-42.4 42.4 19 42.4 42.4v42.4h-42.4z"}}]},"name":"mac-command","theme":"outlined"};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-mac-command-outlined']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-mac-command-outlined')
export default class MacCommandOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'MacCommandOutlined';
  static tagName = 'o-mac-command-outlined';
  static inheritAttrs = false;
  render(props: Omi.OmiProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={MacCommandOutlinedSvg} />;
  };
}