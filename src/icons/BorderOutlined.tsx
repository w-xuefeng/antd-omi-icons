// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BorderOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-border-outlined')
export default class BorderOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'BorderOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={BorderOutlinedSvg}></AntdIcon>;
  };
}