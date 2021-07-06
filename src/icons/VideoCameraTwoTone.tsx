// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import VideoCameraTwoToneSvg from '@ant-design/icons-svg/lib/asn/VideoCameraTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-video-camera-two-tone')
export default class VideoCameraTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'VideoCameraTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={VideoCameraTwoToneSvg}></AntdIcon>;
  };
}