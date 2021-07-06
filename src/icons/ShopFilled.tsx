// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ShopFilledSvg from '@ant-design/icons-svg/lib/asn/ShopFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-shop-filled')
export default class ShopFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'ShopFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={ShopFilledSvg}></AntdIcon>;
  };
}