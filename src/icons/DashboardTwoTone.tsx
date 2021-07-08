// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DashboardTwoToneSvg from '@ant-design/icons-svg/es/asn/DashboardTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-dashboard-two-tone')
export default class DashboardTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'DashboardTwoTone';
  static tagName = 'o-dashboard-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DashboardTwoToneSvg} />;
  };
}