// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ScissorOutlinedSvg from '@ant-design/icons-svg/lib/asn/ScissorOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-scissor-outlined')
export default class ScissorOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ScissorOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={ScissorOutlinedSvg}></AntdIcon>;
  };
}