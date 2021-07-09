// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const ShoppingTwoToneSvg = {"name":"shopping","theme":"twotone"};

@tag('o-shopping-two-tone')
export default class ShoppingTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'ShoppingTwoTone';
  static tagName = 'o-shopping-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ShoppingTwoToneSvg} />;
  };
}