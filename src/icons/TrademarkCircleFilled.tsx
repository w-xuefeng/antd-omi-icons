// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import TrademarkCircleFilledSvg from '@ant-design/icons-svg/es/asn/TrademarkCircleFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-trademark-circle-filled')
export default class TrademarkCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'TrademarkCircleFilled';
  static tagName = 'o-trademark-circle-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={TrademarkCircleFilledSvg} />;
  };
}