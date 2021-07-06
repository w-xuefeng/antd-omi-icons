// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import TrademarkCircleFilledSvg from '@ant-design/icons-svg/lib/asn/TrademarkCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-trademark-circle-filled')
export default class TrademarkCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'TrademarkCircleFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={TrademarkCircleFilledSvg}></AntdIcon>;
  };
}