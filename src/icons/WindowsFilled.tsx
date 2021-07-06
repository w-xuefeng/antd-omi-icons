// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import WindowsFilledSvg from '@ant-design/icons-svg/lib/asn/WindowsFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-windows-filled')
export default class WindowsFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'WindowsFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={WindowsFilledSvg}></AntdIcon>;
  };
}