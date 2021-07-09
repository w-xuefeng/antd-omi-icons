// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const GoldTwoToneSvg = {"name":"gold","theme":"twotone"};

@tag('o-gold-two-tone')
export default class GoldTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'GoldTwoTone';
  static tagName = 'o-gold-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={GoldTwoToneSvg} />;
  };
}