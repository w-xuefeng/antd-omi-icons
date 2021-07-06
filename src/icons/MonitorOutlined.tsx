// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MonitorOutlinedSvg from '@ant-design/icons-svg/lib/asn/MonitorOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-monitor-outlined')
export default class MonitorOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'MonitorOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={MonitorOutlinedSvg}></AntdIcon>;
  };
}