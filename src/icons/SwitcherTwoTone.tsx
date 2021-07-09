// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const SwitcherTwoToneSvg = {"name":"switcher","theme":"twotone"};

@tag('o-switcher-two-tone')
export default class SwitcherTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'SwitcherTwoTone';
  static tagName = 'o-switcher-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SwitcherTwoToneSvg} />;
  };
}