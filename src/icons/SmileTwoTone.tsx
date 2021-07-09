// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const SmileTwoToneSvg = {"name":"smile","theme":"twotone"};

@tag('o-smile-two-tone')
export default class SmileTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'SmileTwoTone';
  static tagName = 'o-smile-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SmileTwoToneSvg} />;
  };
}