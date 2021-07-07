// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AreaChartOutlinedSvg from '@ant-design/icons-svg/lib/asn/AreaChartOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-area-chart-outlined')
export default class AreaChartOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'AreaChartOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={AreaChartOutlinedSvg} />;
  };
}