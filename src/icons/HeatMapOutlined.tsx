// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import HeatMapOutlinedSvg from '@ant-design/icons-svg/lib/asn/HeatMapOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-heat-map-outlined')
export default class HeatMapOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'HeatMapOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={HeatMapOutlinedSvg} />;
  };
}