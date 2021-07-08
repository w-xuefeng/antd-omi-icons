// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CameraOutlinedSvg from '@ant-design/icons-svg/es/asn/CameraOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-camera-outlined')
export default class CameraOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CameraOutlined';
  static tagName = 'o-camera-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CameraOutlinedSvg} />;
  };
}