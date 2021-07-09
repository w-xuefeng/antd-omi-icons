// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const ThunderboltTwoToneSvg = {"name":"thunderbolt","theme":"twotone"};

@tag('o-thunderbolt-two-tone')
export default class ThunderboltTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'ThunderboltTwoTone';
  static tagName = 'o-thunderbolt-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ThunderboltTwoToneSvg} />;
  };
}