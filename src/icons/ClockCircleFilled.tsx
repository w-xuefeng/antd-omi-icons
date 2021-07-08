// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ClockCircleFilledSvg from '@ant-design/icons-svg/es/asn/ClockCircleFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-clock-circle-filled')
export default class ClockCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'ClockCircleFilled';
  static tagName = 'o-clock-circle-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ClockCircleFilledSvg} />;
  };
}