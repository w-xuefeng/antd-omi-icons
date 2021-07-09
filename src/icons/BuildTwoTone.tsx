// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const BuildTwoToneSvg = {"name":"build","theme":"twotone"};

@tag('o-build-two-tone')
export default class BuildTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'BuildTwoTone';
  static tagName = 'o-build-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={BuildTwoToneSvg} />;
  };
}