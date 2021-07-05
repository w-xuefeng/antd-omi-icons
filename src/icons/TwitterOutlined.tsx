// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import TwitterOutlinedSvg from '@ant-design/icons-svg/lib/asn/TwitterOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-twitter-outlined')
export default class TwitterOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'TwitterOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={TwitterOutlinedSvg}></AntdIcon>;
  };
}