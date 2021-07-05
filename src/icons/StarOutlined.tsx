// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import StarOutlinedSvg from '@ant-design/icons-svg/lib/asn/StarOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-star-outlined')
export default class StarOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'StarOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={StarOutlinedSvg}></AntdIcon>;
  };
}