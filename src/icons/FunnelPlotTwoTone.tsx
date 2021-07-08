// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FunnelPlotTwoToneSvg from '@ant-design/icons-svg/es/asn/FunnelPlotTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-funnel-plot-two-tone')
export default class FunnelPlotTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'FunnelPlotTwoTone';
  static tagName = 'o-funnel-plot-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FunnelPlotTwoToneSvg} />;
  };
}