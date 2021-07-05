// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ForkOutlinedSvg from '@ant-design/icons-svg/lib/asn/ForkOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-fork-outlined')
export default class ForkOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ForkOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={ForkOutlinedSvg}></AntdIcon>;
  };
}