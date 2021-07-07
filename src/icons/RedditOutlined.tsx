// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RedditOutlinedSvg from '@ant-design/icons-svg/lib/asn/RedditOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-reddit-outlined')
export default class RedditOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'RedditOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={RedditOutlinedSvg} />;
  };
}