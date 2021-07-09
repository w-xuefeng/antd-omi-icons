// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const Html5TwoToneSvg = {"name":"html5","theme":"twotone"};

@tag('o-html5-two-tone')
export default class Html5TwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'Html5TwoTone';
  static tagName = 'o-html5-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={Html5TwoToneSvg} />;
  };
}