// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AudioTwoToneSvg from '@ant-design/icons-svg/lib/asn/AudioTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-audio-two-tone')
export default class AudioTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'AudioTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={AudioTwoToneSvg}></AntdIcon>;
  };
}