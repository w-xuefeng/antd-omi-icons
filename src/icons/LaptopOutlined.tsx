// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import LaptopOutlinedSvg from '@ant-design/icons-svg/lib/asn/LaptopOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-laptop-outlined')
export default class LaptopOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'LaptopOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={LaptopOutlinedSvg}></AntdIcon>;
  };
}