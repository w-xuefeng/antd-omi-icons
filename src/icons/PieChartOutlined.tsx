// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PieChartOutlinedSvg from '@ant-design/icons-svg/es/asn/PieChartOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-pie-chart-outlined')
export default class PieChartOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'PieChartOutlined';
  static tagName = 'o-pie-chart-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PieChartOutlinedSvg} />;
  };
}