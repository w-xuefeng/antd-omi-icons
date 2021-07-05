// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FunnelPlotOutlinedSvg from '@ant-design/icons-svg/lib/asn/FunnelPlotOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-funnel-plot-outlined')
export default class FunnelPlotOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FunnelPlotOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={FunnelPlotOutlinedSvg}></AntdIcon>;
  };
}