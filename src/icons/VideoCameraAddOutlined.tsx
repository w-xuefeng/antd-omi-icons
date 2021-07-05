// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import VideoCameraAddOutlinedSvg from '@ant-design/icons-svg/lib/asn/VideoCameraAddOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-video-camera-add-outlined')
export default class VideoCameraAddOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'VideoCameraAddOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={VideoCameraAddOutlinedSvg}></AntdIcon>;
  };
}