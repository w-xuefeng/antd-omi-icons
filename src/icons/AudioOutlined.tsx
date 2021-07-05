// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AudioOutlinedSvg from '@ant-design/icons-svg/lib/asn/AudioOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-audio-outlined')
export default class AudioOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'AudioOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={AudioOutlinedSvg}></AntdIcon>;
  };
}