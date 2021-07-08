// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PieChartFilledSvg from '@ant-design/icons-svg/es/asn/PieChartFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-pie-chart-filled')
export default class PieChartFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'PieChartFilled';
  static tagName = 'o-pie-chart-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PieChartFilledSvg} />;
  };
}