// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ShopOutlinedSvg from '@ant-design/icons-svg/es/asn/ShopOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-shop-outlined')
export default class ShopOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ShopOutlined';
  static tagName = 'o-shop-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ShopOutlinedSvg} />;
  };
}