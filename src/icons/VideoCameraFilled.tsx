// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import VideoCameraFilledSvg from '@ant-design/icons-svg/lib/asn/VideoCameraFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-video-camera-filled')
export default class VideoCameraFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'VideoCameraFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={VideoCameraFilledSvg}></AntdIcon>;
  };
}