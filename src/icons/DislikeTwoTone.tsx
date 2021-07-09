// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const DislikeTwoToneSvg = {"name":"dislike","theme":"twotone"};

@tag('o-dislike-two-tone')
export default class DislikeTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'DislikeTwoTone';
  static tagName = 'o-dislike-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DislikeTwoToneSvg} />;
  };
}