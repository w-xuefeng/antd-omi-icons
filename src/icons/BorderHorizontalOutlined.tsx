// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BorderHorizontalOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderHorizontalOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-border-horizontal-outlined')
export default class BorderHorizontalOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'BorderHorizontalOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={BorderHorizontalOutlinedSvg}></AntdIcon>;
  };
}