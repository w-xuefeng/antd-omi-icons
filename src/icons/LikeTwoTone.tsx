// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const LikeTwoToneSvg = {"name":"like","theme":"twotone"};

@tag('o-like-two-tone')
export default class LikeTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'LikeTwoTone';
  static tagName = 'o-like-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={LikeTwoToneSvg} />;
  };
}