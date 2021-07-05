// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AudioMutedOutlinedSvg from '@ant-design/icons-svg/lib/asn/AudioMutedOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-audio-muted-outlined')
export default class AudioMutedOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'AudioMutedOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={AudioMutedOutlinedSvg}></AntdIcon>;
  };
}