// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MenuOutlinedSvg from '@ant-design/icons-svg/lib/asn/MenuOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-menu-outlined')
export default class MenuOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'MenuOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={MenuOutlinedSvg} />;
  };
}