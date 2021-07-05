// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MenuOutlinedSvg from '@ant-design/icons-svg/lib/asn/MenuOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-menu-outlined')
export default class MenuOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'MenuOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={MenuOutlinedSvg}></AntdIcon>;
  };
}