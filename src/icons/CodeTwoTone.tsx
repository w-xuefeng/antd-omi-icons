// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const CodeTwoToneSvg = {"name":"code","theme":"twotone"};

@tag('o-code-two-tone')
export default class CodeTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'CodeTwoTone';
  static tagName = 'o-code-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CodeTwoToneSvg} />;
  };
}