// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PieChartOutlinedSvg from '@ant-design/icons-svg/lib/asn/PieChartOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-pie-chart-outlined')
export default class PieChartOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'PieChartOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={PieChartOutlinedSvg}></AntdIcon>;
  };
}