// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CheckOutlinedSvg from '@ant-design/icons-svg/lib/asn/CheckOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-check-outlined')
export default class CheckOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CheckOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={CheckOutlinedSvg}></AntdIcon>;
  };
}