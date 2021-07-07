// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DashboardFilledSvg from '@ant-design/icons-svg/lib/asn/DashboardFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-dashboard-filled')
export default class DashboardFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'DashboardFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DashboardFilledSvg} />;
  };
}