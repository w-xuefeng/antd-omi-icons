// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FallOutlinedSvg from '@ant-design/icons-svg/lib/asn/FallOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-fall-outlined')
export default class FallOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FallOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={FallOutlinedSvg}></AntdIcon>;
  };
}