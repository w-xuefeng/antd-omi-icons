// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import WindowsOutlinedSvg from '@ant-design/icons-svg/es/asn/WindowsOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-windows-outlined')
export default class WindowsOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'WindowsOutlined';
  static tagName = 'o-windows-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={WindowsOutlinedSvg} />;
  };
}