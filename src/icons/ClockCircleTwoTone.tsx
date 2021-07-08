// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ClockCircleTwoToneSvg from '@ant-design/icons-svg/es/asn/ClockCircleTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-clock-circle-two-tone')
export default class ClockCircleTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'ClockCircleTwoTone';
  static tagName = 'o-clock-circle-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ClockCircleTwoToneSvg} />;
  };
}