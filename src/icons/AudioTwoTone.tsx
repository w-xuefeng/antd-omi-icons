// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AudioTwoToneSvg from '@ant-design/icons-svg/lib/asn/AudioTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-audio-two-tone')
export default class AudioTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'AudioTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={AudioTwoToneSvg} />;
  };
}