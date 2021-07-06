// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SoundFilledSvg from '@ant-design/icons-svg/lib/asn/SoundFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-sound-filled')
export default class SoundFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'SoundFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={SoundFilledSvg}></AntdIcon>;
  };
}