// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ShopTwoToneSvg from '@ant-design/icons-svg/lib/asn/ShopTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-shop-two-tone')
export default class ShopTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'ShopTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ShopTwoToneSvg} />;
  };
}