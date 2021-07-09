// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const LeftSquareTwoToneSvg = {"name":"left-square","theme":"twotone"};

@tag('o-left-square-two-tone')
export default class LeftSquareTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'LeftSquareTwoTone';
  static tagName = 'o-left-square-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={LeftSquareTwoToneSvg} />;
  };
}