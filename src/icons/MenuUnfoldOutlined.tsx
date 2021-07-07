// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MenuUnfoldOutlinedSvg from '@ant-design/icons-svg/lib/asn/MenuUnfoldOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-menu-unfold-outlined')
export default class MenuUnfoldOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'MenuUnfoldOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={MenuUnfoldOutlinedSvg} />;
  };
}