// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DashboardTwoToneSvg from '@ant-design/icons-svg/lib/asn/DashboardTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-dashboard-two-tone')
export default class DashboardTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'DashboardTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={DashboardTwoToneSvg}></AntdIcon>;
  };
}