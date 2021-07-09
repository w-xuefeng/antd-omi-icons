// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const StarTwoToneSvg = {"name":"star","theme":"twotone"};

@tag('o-star-two-tone')
export default class StarTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'StarTwoTone';
  static tagName = 'o-star-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={StarTwoToneSvg} />;
  };
}