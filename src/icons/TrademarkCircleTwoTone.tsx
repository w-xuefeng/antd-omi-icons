// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import TrademarkCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/TrademarkCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-trademark-circle-two-tone')
export default class TrademarkCircleTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'TrademarkCircleTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={TrademarkCircleTwoToneSvg}></AntdIcon>;
  };
}