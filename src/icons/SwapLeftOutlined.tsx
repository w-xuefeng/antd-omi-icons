// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SwapLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/SwapLeftOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-swap-left-outlined')
export default class SwapLeftOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SwapLeftOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SwapLeftOutlinedSvg} />;
  };
}