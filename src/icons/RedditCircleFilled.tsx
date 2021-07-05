// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RedditCircleFilledSvg from '@ant-design/icons-svg/lib/asn/RedditCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-reddit-circle-filled')
export default class RedditCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'RedditCircleFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={RedditCircleFilledSvg}></AntdIcon>;
  };
}