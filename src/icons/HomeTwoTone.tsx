// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const HomeTwoToneSvg = {"name":"home","theme":"twotone"};

@tag('o-home-two-tone')
export default class HomeTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'HomeTwoTone';
  static tagName = 'o-home-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={HomeTwoToneSvg} />;
  };
}