// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ControlTwoToneSvg from '@ant-design/icons-svg/lib/asn/ControlTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-control-two-tone')
export default class ControlTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'ControlTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={ControlTwoToneSvg}></AntdIcon>;
  };
}