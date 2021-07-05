// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AudioFilledSvg from '@ant-design/icons-svg/lib/asn/AudioFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-audio-filled')
export default class AudioFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'AudioFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={AudioFilledSvg}></AntdIcon>;
  };
}