// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DashboardFilledSvg from '@ant-design/icons-svg/es/asn/DashboardFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-dashboard-filled')
export default class DashboardFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'DashboardFilled';
  static tagName = 'o-dashboard-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DashboardFilledSvg} />;
  };
}