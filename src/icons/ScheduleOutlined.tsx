// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ScheduleOutlinedSvg from '@ant-design/icons-svg/lib/asn/ScheduleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-schedule-outlined')
export default class ScheduleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ScheduleOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={ScheduleOutlinedSvg}></AntdIcon>;
  };
}