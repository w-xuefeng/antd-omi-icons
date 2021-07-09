// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const MehTwoToneSvg = {"name":"meh","theme":"twotone"};

@tag('o-meh-two-tone')
export default class MehTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'MehTwoTone';
  static tagName = 'o-meh-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={MehTwoToneSvg} />;
  };
}