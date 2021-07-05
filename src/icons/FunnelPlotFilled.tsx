// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FunnelPlotFilledSvg from '@ant-design/icons-svg/lib/asn/FunnelPlotFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-funnel-plot-filled')
export default class FunnelPlotFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FunnelPlotFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={FunnelPlotFilledSvg}></AntdIcon>;
  };
}