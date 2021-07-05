// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MenuFoldOutlinedSvg from '@ant-design/icons-svg/lib/asn/MenuFoldOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-menu-fold-outlined')
export default class MenuFoldOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'MenuFoldOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={MenuFoldOutlinedSvg}></AntdIcon>;
  };
}