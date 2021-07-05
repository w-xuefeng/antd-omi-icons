// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import HomeOutlinedSvg from '@ant-design/icons-svg/lib/asn/HomeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-home-outlined')
export default class HomeOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'HomeOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={HomeOutlinedSvg}></AntdIcon>;
  };
}