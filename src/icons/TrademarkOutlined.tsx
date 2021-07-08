// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import TrademarkOutlinedSvg from '@ant-design/icons-svg/es/asn/TrademarkOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-trademark-outlined')
export default class TrademarkOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'TrademarkOutlined';
  static tagName = 'o-trademark-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={TrademarkOutlinedSvg} />;
  };
}