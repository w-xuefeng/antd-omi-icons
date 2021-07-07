// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import LineChartOutlinedSvg from '@ant-design/icons-svg/lib/asn/LineChartOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-line-chart-outlined')
export default class LineChartOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'LineChartOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={LineChartOutlinedSvg} />;
  };
}