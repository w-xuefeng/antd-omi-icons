// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import LikeOutlinedSvg from '@ant-design/icons-svg/lib/asn/LikeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-like-outlined')
export default class LikeOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'LikeOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={LikeOutlinedSvg}></AntdIcon>;
  };
}