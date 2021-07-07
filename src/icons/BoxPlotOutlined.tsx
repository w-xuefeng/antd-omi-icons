// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BoxPlotOutlinedSvg from '@ant-design/icons-svg/lib/asn/BoxPlotOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-box-plot-outlined')
export default class BoxPlotOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'BoxPlotOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={BoxPlotOutlinedSvg} />;
  };
}