// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ScheduleOutlinedSvg from '@ant-design/icons-svg/lib/asn/ScheduleOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-schedule-outlined')
export default class ScheduleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ScheduleOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ScheduleOutlinedSvg} />;
  };
}