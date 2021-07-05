// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CalendarOutlinedSvg from '@ant-design/icons-svg/lib/asn/CalendarOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-calendar-outlined')
export default class CalendarOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CalendarOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={CalendarOutlinedSvg}></AntdIcon>;
  };
}