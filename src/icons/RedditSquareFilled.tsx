// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RedditSquareFilledSvg from '@ant-design/icons-svg/lib/asn/RedditSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-reddit-square-filled')
export default class RedditSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'RedditSquareFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={RedditSquareFilledSvg}></AntdIcon>;
  };
}