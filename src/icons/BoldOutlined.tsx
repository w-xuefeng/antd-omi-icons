// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BoldOutlinedSvg from '@ant-design/icons-svg/lib/asn/BoldOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-bold-outlined')
export default class BoldOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'BoldOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={BoldOutlinedSvg}></AntdIcon>;
  };
}