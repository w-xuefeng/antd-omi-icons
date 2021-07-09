// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const CalendarTwoToneSvg = {"name":"calendar","theme":"twotone"};

@tag('o-calendar-two-tone')
export default class CalendarTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'CalendarTwoTone';
  static tagName = 'o-calendar-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CalendarTwoToneSvg} />;
  };
}