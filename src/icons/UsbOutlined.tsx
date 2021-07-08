// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import UsbOutlinedSvg from '@ant-design/icons-svg/es/asn/UsbOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-usb-outlined')
export default class UsbOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'UsbOutlined';
  static tagName = 'o-usb-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={UsbOutlinedSvg} />;
  };
}