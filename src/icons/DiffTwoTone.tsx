// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const DiffTwoToneSvg = {"name":"diff","theme":"twotone"};

@tag('o-diff-two-tone')
export default class DiffTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'DiffTwoTone';
  static tagName = 'o-diff-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DiffTwoToneSvg} />;
  };
}