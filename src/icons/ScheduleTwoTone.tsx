// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ScheduleTwoToneSvg from '@ant-design/icons-svg/lib/asn/ScheduleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-schedule-two-tone')
export default class ScheduleTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'ScheduleTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={ScheduleTwoToneSvg}></AntdIcon>;
  };
}