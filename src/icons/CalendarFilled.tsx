// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CalendarFilledSvg from '@ant-design/icons-svg/es/asn/CalendarFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-calendar-filled')
export default class CalendarFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CalendarFilled';
  static tagName = 'o-calendar-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CalendarFilledSvg} />;
  };
}