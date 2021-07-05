// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ShoppingFilledSvg from '@ant-design/icons-svg/lib/asn/ShoppingFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-shopping-filled')
export default class ShoppingFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'ShoppingFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={ShoppingFilledSvg}></AntdIcon>;
  };
}