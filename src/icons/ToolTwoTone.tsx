// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const ToolTwoToneSvg = {"name":"tool","theme":"twotone"};

@tag('o-tool-two-tone')
export default class ToolTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'ToolTwoTone';
  static tagName = 'o-tool-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ToolTwoToneSvg} />;
  };
}