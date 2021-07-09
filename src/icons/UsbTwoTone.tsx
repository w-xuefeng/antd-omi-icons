// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const UsbTwoToneSvg = {"name":"usb","theme":"twotone"};

@tag('o-usb-two-tone')
export default class UsbTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'UsbTwoTone';
  static tagName = 'o-usb-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={UsbTwoToneSvg} />;
  };
}