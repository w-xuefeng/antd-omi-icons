// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FundFilledSvg from '@ant-design/icons-svg/lib/asn/FundFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-fund-filled')
export default class FundFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FundFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={FundFilledSvg}></AntdIcon>;
  };
}