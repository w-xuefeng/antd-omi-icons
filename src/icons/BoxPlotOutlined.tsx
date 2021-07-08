// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BoxPlotOutlinedSvg from '@ant-design/icons-svg/es/asn/BoxPlotOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-box-plot-outlined')
export default class BoxPlotOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'BoxPlotOutlined';
  static tagName = 'o-box-plot-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={BoxPlotOutlinedSvg} />;
  };
}