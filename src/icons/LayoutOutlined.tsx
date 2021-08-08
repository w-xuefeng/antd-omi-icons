// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const LayoutOutlinedSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-696 72h136v656H184V184zm656 656H384V384h456v456zM384 320V184h456v136H384z"}}]},"name":"layout","theme":"outlined"};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-layout-outlined']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-layout-outlined')
export default class LayoutOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'LayoutOutlined';
  static tagName = 'o-layout-outlined';
  static inheritAttrs = false;
  render(props: Omi.OmiProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={LayoutOutlinedSvg} />;
  };
}