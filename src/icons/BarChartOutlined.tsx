// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BarChartOutlinedSvg from '@ant-design/icons-svg/lib/asn/BarChartOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-bar-chart-outlined')
export default class BarChartOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'BarChartOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={BarChartOutlinedSvg}></AntdIcon>;
  };
}