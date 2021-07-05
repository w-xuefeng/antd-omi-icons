// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FundProjectionScreenOutlinedSvg from '@ant-design/icons-svg/lib/asn/FundProjectionScreenOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-fund-projection-screen-outlined')
export default class FundProjectionScreenOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FundProjectionScreenOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={FundProjectionScreenOutlinedSvg}></AntdIcon>;
  };
}