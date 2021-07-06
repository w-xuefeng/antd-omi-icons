// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import TrademarkOutlinedSvg from '@ant-design/icons-svg/lib/asn/TrademarkOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-trademark-outlined')
export default class TrademarkOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'TrademarkOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={TrademarkOutlinedSvg}></AntdIcon>;
  };
}