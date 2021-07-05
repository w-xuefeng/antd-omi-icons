// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DotChartOutlinedSvg from '@ant-design/icons-svg/lib/asn/DotChartOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-dot-chart-outlined')
export default class DotChartOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DotChartOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={DotChartOutlinedSvg}></AntdIcon>;
  };
}