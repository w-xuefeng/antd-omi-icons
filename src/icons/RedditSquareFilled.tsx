// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RedditSquareFilledSvg from '@ant-design/icons-svg/es/asn/RedditSquareFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-reddit-square-filled')
export default class RedditSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'RedditSquareFilled';
  static tagName = 'o-reddit-square-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={RedditSquareFilledSvg} />;
  };
}