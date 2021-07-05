// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ShopOutlinedSvg from '@ant-design/icons-svg/lib/asn/ShopOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-shop-outlined')
export default class ShopOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ShopOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={ShopOutlinedSvg}></AntdIcon>;
  };
}