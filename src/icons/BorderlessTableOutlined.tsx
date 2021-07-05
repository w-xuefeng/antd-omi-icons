// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BorderlessTableOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderlessTableOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-borderless-table-outlined')
export default class BorderlessTableOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'BorderlessTableOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={BorderlessTableOutlinedSvg}></AntdIcon>;
  };
}