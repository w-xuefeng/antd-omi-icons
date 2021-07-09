// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const PushpinTwoToneSvg = {"name":"pushpin","theme":"twotone"};

@tag('o-pushpin-two-tone')
export default class PushpinTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'PushpinTwoTone';
  static tagName = 'o-pushpin-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PushpinTwoToneSvg} />;
  };
}