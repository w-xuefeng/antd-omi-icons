// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const UpSquareTwoToneSvg = {"name":"up-square","theme":"twotone"};

@tag('o-up-square-two-tone')
export default class UpSquareTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'UpSquareTwoTone';
  static tagName = 'o-up-square-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={UpSquareTwoToneSvg} />;
  };
}