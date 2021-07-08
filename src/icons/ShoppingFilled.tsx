// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ShoppingFilledSvg from '@ant-design/icons-svg/es/asn/ShoppingFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-shopping-filled')
export default class ShoppingFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'ShoppingFilled';
  static tagName = 'o-shopping-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ShoppingFilledSvg} />;
  };
}