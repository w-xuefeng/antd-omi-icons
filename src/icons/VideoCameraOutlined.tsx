// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import VideoCameraOutlinedSvg from '@ant-design/icons-svg/lib/asn/VideoCameraOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-video-camera-outlined')
export default class VideoCameraOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'VideoCameraOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={VideoCameraOutlinedSvg}></AntdIcon>;
  };
}