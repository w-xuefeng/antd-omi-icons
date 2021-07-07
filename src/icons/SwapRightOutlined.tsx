// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SwapRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/SwapRightOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-swap-right-outlined')
export default class SwapRightOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SwapRightOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SwapRightOutlinedSvg} />;
  };
}