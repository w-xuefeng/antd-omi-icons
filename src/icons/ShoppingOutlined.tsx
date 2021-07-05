// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ShoppingOutlinedSvg from '@ant-design/icons-svg/lib/asn/ShoppingOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-shopping-outlined')
export default class ShoppingOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ShoppingOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={ShoppingOutlinedSvg}></AntdIcon>;
  };
}