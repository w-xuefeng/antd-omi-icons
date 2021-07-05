// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ArrowUpOutlinedSvg from '@ant-design/icons-svg/lib/asn/ArrowUpOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-arrow-up-outlined')
export default class ArrowUpOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ArrowUpOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={ArrowUpOutlinedSvg}></AntdIcon>;
  };
}