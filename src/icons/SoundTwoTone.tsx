// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SoundTwoToneSvg from '@ant-design/icons-svg/lib/asn/SoundTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-sound-two-tone')
export default class SoundTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'SoundTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SoundTwoToneSvg} />;
  };
}