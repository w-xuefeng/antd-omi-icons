// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CalendarOutlinedSvg from '@ant-design/icons-svg/lib/asn/CalendarOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-calendar-outlined')
export default class CalendarOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CalendarOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CalendarOutlinedSvg} />;
  };
}