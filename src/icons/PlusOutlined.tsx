// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const PlusOutlinedSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{"tag":"path","attrs":{"d":"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},"name":"plus","theme":"outlined"};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-plus-outlined']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-plus-outlined')
export default class PlusOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'PlusOutlined';
  static tagName = 'o-plus-outlined';
  static inheritAttrs = false;
  render(props: Omi.OmiProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={PlusOutlinedSvg} />;
  };
}