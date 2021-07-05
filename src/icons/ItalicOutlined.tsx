// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ItalicOutlinedSvg from '@ant-design/icons-svg/lib/asn/ItalicOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-italic-outlined')
export default class ItalicOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ItalicOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={ItalicOutlinedSvg}></AntdIcon>;
  };
}