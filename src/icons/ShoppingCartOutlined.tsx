// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ShoppingCartOutlinedSvg from '@ant-design/icons-svg/lib/asn/ShoppingCartOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-shopping-cart-outlined')
export default class ShoppingCartOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ShoppingCartOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={ShoppingCartOutlinedSvg}></AntdIcon>;
  };
}