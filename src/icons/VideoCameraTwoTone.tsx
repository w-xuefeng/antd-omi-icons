// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const VideoCameraTwoToneSvg = {"name":"video-camera","theme":"twotone"};

@tag('o-video-camera-two-tone')
export default class VideoCameraTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'VideoCameraTwoTone';
  static tagName = 'o-video-camera-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={VideoCameraTwoToneSvg} />;
  };
}