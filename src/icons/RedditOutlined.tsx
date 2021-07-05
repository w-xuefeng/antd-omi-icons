// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RedditOutlinedSvg from '@ant-design/icons-svg/lib/asn/RedditOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-reddit-outlined')
export default class RedditOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'RedditOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={RedditOutlinedSvg}></AntdIcon>;
  };
}