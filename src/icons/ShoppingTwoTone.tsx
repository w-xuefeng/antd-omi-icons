// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ShoppingTwoToneSvg from '@ant-design/icons-svg/lib/asn/ShoppingTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-shopping-two-tone')
export default class ShoppingTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'ShoppingTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={ShoppingTwoToneSvg}></AntdIcon>;
  };
}