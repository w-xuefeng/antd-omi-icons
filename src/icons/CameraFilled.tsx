// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CameraFilledSvg from '@ant-design/icons-svg/lib/asn/CameraFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-camera-filled')
export default class CameraFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CameraFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={CameraFilledSvg}></AntdIcon>;
  };
}