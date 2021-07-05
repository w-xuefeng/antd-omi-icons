// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BorderTopOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderTopOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-border-top-outlined')
export default class BorderTopOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'BorderTopOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={BorderTopOutlinedSvg}></AntdIcon>;
  };
}