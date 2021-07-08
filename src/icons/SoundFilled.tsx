// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SoundFilledSvg from '@ant-design/icons-svg/es/asn/SoundFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-sound-filled')
export default class SoundFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'SoundFilled';
  static tagName = 'o-sound-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SoundFilledSvg} />;
  };
}