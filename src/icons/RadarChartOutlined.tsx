// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RadarChartOutlinedSvg from '@ant-design/icons-svg/es/asn/RadarChartOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-radar-chart-outlined')
export default class RadarChartOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'RadarChartOutlined';
  static tagName = 'o-radar-chart-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={RadarChartOutlinedSvg} />;
  };
}