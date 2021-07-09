// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const SoundTwoToneSvg = {"name":"sound","theme":"twotone"};

@tag('o-sound-two-tone')
export default class SoundTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'SoundTwoTone';
  static tagName = 'o-sound-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SoundTwoToneSvg} />;
  };
}