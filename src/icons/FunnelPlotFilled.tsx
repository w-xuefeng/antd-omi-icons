// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FunnelPlotFilledSvg from '@ant-design/icons-svg/lib/asn/FunnelPlotFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-funnel-plot-filled')
export default class FunnelPlotFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FunnelPlotFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FunnelPlotFilledSvg} />;
  };
}