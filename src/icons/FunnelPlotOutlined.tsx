// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FunnelPlotOutlinedSvg from '@ant-design/icons-svg/es/asn/FunnelPlotOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-funnel-plot-outlined')
export default class FunnelPlotOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FunnelPlotOutlined';
  static tagName = 'o-funnel-plot-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FunnelPlotOutlinedSvg} />;
  };
}