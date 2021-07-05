// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BorderOuterOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderOuterOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-border-outer-outlined')
export default class BorderOuterOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'BorderOuterOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={BorderOuterOutlinedSvg}></AntdIcon>;
  };
}