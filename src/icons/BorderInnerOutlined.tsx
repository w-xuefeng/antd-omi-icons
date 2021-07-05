// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BorderInnerOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderInnerOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-border-inner-outlined')
export default class BorderInnerOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'BorderInnerOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={BorderInnerOutlinedSvg}></AntdIcon>;
  };
}