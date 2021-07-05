// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RadarChartOutlinedSvg from '@ant-design/icons-svg/lib/asn/RadarChartOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-radar-chart-outlined')
export default class RadarChartOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'RadarChartOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={RadarChartOutlinedSvg}></AntdIcon>;
  };
}