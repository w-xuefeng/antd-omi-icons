// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import HeartOutlinedSvg from '@ant-design/icons-svg/lib/asn/HeartOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-heart-outlined')
export default class HeartOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'HeartOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={HeartOutlinedSvg}></AntdIcon>;
  };
}