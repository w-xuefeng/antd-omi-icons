// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import WindowsOutlinedSvg from '@ant-design/icons-svg/lib/asn/WindowsOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-windows-outlined')
export default class WindowsOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'WindowsOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={WindowsOutlinedSvg}></AntdIcon>;
  };
}