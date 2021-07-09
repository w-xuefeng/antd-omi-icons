// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const RightCircleTwoToneSvg = {"name":"right-circle","theme":"twotone"};

@tag('o-right-circle-two-tone')
export default class RightCircleTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'RightCircleTwoTone';
  static tagName = 'o-right-circle-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={RightCircleTwoToneSvg} />;
  };
}