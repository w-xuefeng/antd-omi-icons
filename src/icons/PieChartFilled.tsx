// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const PieChartFilledSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M863.1 518.5H505.5V160.9c0-4.4-3.6-8-8-8h-26a398.57 398.57 0 00-282.5 117 397.47 397.47 0 00-85.6 127C82.6 446.2 72 498.5 72 552.5S82.6 658.7 103.4 708c20.1 47.5 48.9 90.3 85.6 127 36.7 36.7 79.4 65.5 127 85.6a396.64 396.64 0 00155.6 31.5 398.57 398.57 0 00282.5-117c36.7-36.7 65.5-79.4 85.6-127a396.64 396.64 0 0031.5-155.6v-26c-.1-4.4-3.7-8-8.1-8zM951 463l-2.6-28.2c-8.5-92-49.3-178.8-115.1-244.3A398.5 398.5 0 00588.4 75.6L560.1 73c-4.7-.4-8.7 3.2-8.7 7.9v383.7c0 4.4 3.6 8 8 8l383.6-1c4.7-.1 8.4-4 8-8.6z"}}]},"name":"pie-chart","theme":"filled"};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-pie-chart-filled']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-pie-chart-filled')
export default class PieChartFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'PieChartFilled';
  static tagName = 'o-pie-chart-filled';
  static inheritAttrs = false;
  render(props: Omi.OmiProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={PieChartFilledSvg} />;
  };
}