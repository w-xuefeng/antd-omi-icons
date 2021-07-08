// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import StockOutlinedSvg from '@ant-design/icons-svg/es/asn/StockOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-stock-outlined')
export default class StockOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'StockOutlined';
  static tagName = 'o-stock-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={StockOutlinedSvg} />;
  };
}