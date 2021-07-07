// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CameraFilledSvg from '@ant-design/icons-svg/lib/asn/CameraFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-camera-filled')
export default class CameraFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CameraFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CameraFilledSvg} />;
  };
}