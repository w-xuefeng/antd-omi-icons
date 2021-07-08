// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DashboardOutlinedSvg from '@ant-design/icons-svg/es/asn/DashboardOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-dashboard-outlined')
export default class DashboardOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DashboardOutlined';
  static tagName = 'o-dashboard-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DashboardOutlinedSvg} />;
  };
}