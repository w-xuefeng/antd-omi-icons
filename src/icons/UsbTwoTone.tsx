// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import UsbTwoToneSvg from '@ant-design/icons-svg/lib/asn/UsbTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-usb-two-tone')
export default class UsbTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'UsbTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={UsbTwoToneSvg}></AntdIcon>;
  };
}