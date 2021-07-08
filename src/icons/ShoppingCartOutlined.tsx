// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ShoppingCartOutlinedSvg from '@ant-design/icons-svg/es/asn/ShoppingCartOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-shopping-cart-outlined')
export default class ShoppingCartOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ShoppingCartOutlined';
  static tagName = 'o-shopping-cart-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ShoppingCartOutlinedSvg} />;
  };
}