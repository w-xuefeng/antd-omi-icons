// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const CloseSquareTwoToneSvg = {"name":"close-square","theme":"twotone"};

@tag('o-close-square-two-tone')
export default class CloseSquareTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'CloseSquareTwoTone';
  static tagName = 'o-close-square-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CloseSquareTwoToneSvg} />;
  };
}