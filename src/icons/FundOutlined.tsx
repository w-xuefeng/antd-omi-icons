// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FundOutlinedSvg from '@ant-design/icons-svg/lib/asn/FundOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-fund-outlined')
export default class FundOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FundOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={FundOutlinedSvg}></AntdIcon>;
  };
}