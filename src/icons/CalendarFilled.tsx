// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CalendarFilledSvg from '@ant-design/icons-svg/lib/asn/CalendarFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-calendar-filled')
export default class CalendarFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CalendarFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={CalendarFilledSvg}></AntdIcon>;
  };
}