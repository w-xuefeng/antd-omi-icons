// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const GiftTwoToneSvg = {"name":"gift","theme":"twotone"};

@tag('o-gift-two-tone')
export default class GiftTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'GiftTwoTone';
  static tagName = 'o-gift-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={GiftTwoToneSvg} />;
  };
}