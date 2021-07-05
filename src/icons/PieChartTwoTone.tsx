// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PieChartTwoToneSvg from '@ant-design/icons-svg/lib/asn/PieChartTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-pie-chart-two-tone')
export default class PieChartTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'PieChartTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={PieChartTwoToneSvg}></AntdIcon>;
  };
}