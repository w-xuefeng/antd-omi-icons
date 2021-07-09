// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const LeftCircleTwoToneSvg = {"name":"left-circle","theme":"twotone"};

@tag('o-left-circle-two-tone')
export default class LeftCircleTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'LeftCircleTwoTone';
  static tagName = 'o-left-circle-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={LeftCircleTwoToneSvg} />;
  };
}