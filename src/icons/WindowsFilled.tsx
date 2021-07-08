// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import WindowsFilledSvg from '@ant-design/icons-svg/es/asn/WindowsFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-windows-filled')
export default class WindowsFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'WindowsFilled';
  static tagName = 'o-windows-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={WindowsFilledSvg} />;
  };
}