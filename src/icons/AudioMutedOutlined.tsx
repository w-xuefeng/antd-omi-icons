// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AudioMutedOutlinedSvg from '@ant-design/icons-svg/lib/asn/AudioMutedOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-audio-muted-outlined')
export default class AudioMutedOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'AudioMutedOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={AudioMutedOutlinedSvg} />;
  };
}