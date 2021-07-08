// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import TrademarkCircleOutlinedSvg from '@ant-design/icons-svg/es/asn/TrademarkCircleOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-trademark-circle-outlined')
export default class TrademarkCircleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'TrademarkCircleOutlined';
  static tagName = 'o-trademark-circle-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={TrademarkCircleOutlinedSvg} />;
  };
}