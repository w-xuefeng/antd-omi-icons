// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MenuFoldOutlinedSvg from '@ant-design/icons-svg/es/asn/MenuFoldOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-menu-fold-outlined')
export default class MenuFoldOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'MenuFoldOutlined';
  static tagName = 'o-menu-fold-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={MenuFoldOutlinedSvg} />;
  };
}