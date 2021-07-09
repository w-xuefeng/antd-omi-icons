// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const BugTwoToneSvg = {"name":"bug","theme":"twotone"};

@tag('o-bug-two-tone')
export default class BugTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'BugTwoTone';
  static tagName = 'o-bug-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={BugTwoToneSvg} />;
  };
}