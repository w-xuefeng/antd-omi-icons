// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const SmallDashOutlinedSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M112 476h72v72h-72zm182 0h72v72h-72zm364 0h72v72h-72zm182 0h72v72h-72zm-364 0h72v72h-72z"}}]},"name":"small-dash","theme":"outlined"};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-small-dash-outlined']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-small-dash-outlined')
export default class SmallDashOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SmallDashOutlined';
  static tagName = 'o-small-dash-outlined';
  static inheritAttrs = false;
  render(props: Omi.OmiProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={SmallDashOutlinedSvg} />;
  };
}