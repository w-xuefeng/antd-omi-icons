// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import VideoCameraFilledSvg from '@ant-design/icons-svg/es/asn/VideoCameraFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-video-camera-filled')
export default class VideoCameraFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'VideoCameraFilled';
  static tagName = 'o-video-camera-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={VideoCameraFilledSvg} />;
  };
}