// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ScheduleFilledSvg from '@ant-design/icons-svg/lib/asn/ScheduleFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-schedule-filled')
export default class ScheduleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'ScheduleFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ScheduleFilledSvg} />;
  };
}