// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import VideoCameraAddOutlinedSvg from '@ant-design/icons-svg/es/asn/VideoCameraAddOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-video-camera-add-outlined')
export default class VideoCameraAddOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'VideoCameraAddOutlined';
  static tagName = 'o-video-camera-add-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={VideoCameraAddOutlinedSvg} />;
  };
}