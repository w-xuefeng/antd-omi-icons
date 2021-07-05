// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ScheduleFilledSvg from '@ant-design/icons-svg/lib/asn/ScheduleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-schedule-filled')
export default class ScheduleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'ScheduleFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={ScheduleFilledSvg}></AntdIcon>;
  };
}