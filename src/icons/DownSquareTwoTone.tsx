// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const DownSquareTwoToneSvg = {"name":"down-square","theme":"twotone"};

@tag('o-down-square-two-tone')
export default class DownSquareTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'DownSquareTwoTone';
  static tagName = 'o-down-square-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DownSquareTwoToneSvg} />;
  };
}