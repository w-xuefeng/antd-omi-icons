// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const PieChartTwoToneSvg = {"name":"pie-chart","theme":"twotone"};

@tag('o-pie-chart-two-tone')
export default class PieChartTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'PieChartTwoTone';
  static tagName = 'o-pie-chart-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PieChartTwoToneSvg} />;
  };
}