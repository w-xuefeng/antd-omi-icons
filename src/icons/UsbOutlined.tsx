// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import UsbOutlinedSvg from '@ant-design/icons-svg/lib/asn/UsbOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-usb-outlined')
export default class UsbOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'UsbOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={UsbOutlinedSvg}></AntdIcon>;
  };
}