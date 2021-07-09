// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const ScheduleTwoToneSvg = {"name":"schedule","theme":"twotone"};

@tag('o-schedule-two-tone')
export default class ScheduleTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'ScheduleTwoTone';
  static tagName = 'o-schedule-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ScheduleTwoToneSvg} />;
  };
}