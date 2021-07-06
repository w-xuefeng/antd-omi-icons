// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DashboardOutlinedSvg from '@ant-design/icons-svg/lib/asn/DashboardOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-dashboard-outlined')
export default class DashboardOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DashboardOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={DashboardOutlinedSvg}></AntdIcon>;
  };
}