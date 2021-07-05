// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ControlOutlinedSvg from '@ant-design/icons-svg/lib/asn/ControlOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-control-outlined')
export default class ControlOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ControlOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={ControlOutlinedSvg}></AntdIcon>;
  };
}