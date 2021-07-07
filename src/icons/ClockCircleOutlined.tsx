// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ClockCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/ClockCircleOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-clock-circle-outlined')
export default class ClockCircleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ClockCircleOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ClockCircleOutlinedSvg} />;
  };
}