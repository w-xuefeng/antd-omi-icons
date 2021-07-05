// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ClockCircleFilledSvg from '@ant-design/icons-svg/lib/asn/ClockCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-clock-circle-filled')
export default class ClockCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'ClockCircleFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={ClockCircleFilledSvg}></AntdIcon>;
  };
}