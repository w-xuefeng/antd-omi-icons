// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const TabletOutlinedSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M800 64H224c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h576c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64zm-8 824H232V136h560v752zM472 784a40 40 0 1080 0 40 40 0 10-80 0z"}}]},"name":"tablet","theme":"outlined"};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-tablet-outlined']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-tablet-outlined')
export default class TabletOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'TabletOutlined';
  static tagName = 'o-tablet-outlined';
  static inheritAttrs = false;
  render(props: Omi.OmiProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={TabletOutlinedSvg} />;
  };
}