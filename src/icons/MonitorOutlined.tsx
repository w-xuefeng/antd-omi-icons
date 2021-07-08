// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MonitorOutlinedSvg from '@ant-design/icons-svg/es/asn/MonitorOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-monitor-outlined')
export default class MonitorOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'MonitorOutlined';
  static tagName = 'o-monitor-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={MonitorOutlinedSvg} />;
  };
}