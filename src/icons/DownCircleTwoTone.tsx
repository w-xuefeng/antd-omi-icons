// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const DownCircleTwoToneSvg = {"name":"down-circle","theme":"twotone"};

@tag('o-down-circle-two-tone')
export default class DownCircleTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'DownCircleTwoTone';
  static tagName = 'o-down-circle-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DownCircleTwoToneSvg} />;
  };
}