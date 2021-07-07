// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DotChartOutlinedSvg from '@ant-design/icons-svg/lib/asn/DotChartOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-dot-chart-outlined')
export default class DotChartOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DotChartOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DotChartOutlinedSvg} />;
  };
}