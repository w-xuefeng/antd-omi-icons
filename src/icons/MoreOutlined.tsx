// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const MoreOutlinedSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z"}}]},"name":"more","theme":"outlined"};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-more-outlined']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-more-outlined')
export default class MoreOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'MoreOutlined';
  static tagName = 'o-more-outlined';
  static inheritAttrs = false;
  render(props: Omi.OmiProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={MoreOutlinedSvg} />;
  };
}