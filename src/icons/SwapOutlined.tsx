// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SwapOutlinedSvg from '@ant-design/icons-svg/lib/asn/SwapOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-swap-outlined')
export default class SwapOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SwapOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={SwapOutlinedSvg}></AntdIcon>;
  };
}