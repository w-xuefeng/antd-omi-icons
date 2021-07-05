// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RetweetOutlinedSvg from '@ant-design/icons-svg/lib/asn/RetweetOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-retweet-outlined')
export default class RetweetOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'RetweetOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={RetweetOutlinedSvg}></AntdIcon>;
  };
}