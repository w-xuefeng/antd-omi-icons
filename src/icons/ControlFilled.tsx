// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ControlFilledSvg from '@ant-design/icons-svg/lib/asn/ControlFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-control-filled')
export default class ControlFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'ControlFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={ControlFilledSvg}></AntdIcon>;
  };
}