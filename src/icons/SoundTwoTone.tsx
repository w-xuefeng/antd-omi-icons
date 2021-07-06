// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SoundTwoToneSvg from '@ant-design/icons-svg/lib/asn/SoundTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-sound-two-tone')
export default class SoundTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'SoundTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={SoundTwoToneSvg}></AntdIcon>;
  };
}