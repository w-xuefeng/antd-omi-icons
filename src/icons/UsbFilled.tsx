// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import UsbFilledSvg from '@ant-design/icons-svg/lib/asn/UsbFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-usb-filled')
export default class UsbFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'UsbFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={UsbFilledSvg}></AntdIcon>;
  };
}