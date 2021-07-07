// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RedditCircleFilledSvg from '@ant-design/icons-svg/lib/asn/RedditCircleFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-reddit-circle-filled')
export default class RedditCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'RedditCircleFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={RedditCircleFilledSvg} />;
  };
}