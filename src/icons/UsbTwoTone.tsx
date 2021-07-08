// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import UsbTwoToneSvg from '@ant-design/icons-svg/es/asn/UsbTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-usb-two-tone')
export default class UsbTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'UsbTwoTone';
  static tagName = 'o-usb-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={UsbTwoToneSvg} />;
  };
}