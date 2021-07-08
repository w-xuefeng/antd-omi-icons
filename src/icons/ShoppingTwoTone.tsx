// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ShoppingTwoToneSvg from '@ant-design/icons-svg/es/asn/ShoppingTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-shopping-two-tone')
export default class ShoppingTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'ShoppingTwoTone';
  static tagName = 'o-shopping-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ShoppingTwoToneSvg} />;
  };
}