// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import WeiboOutlinedSvg from '@ant-design/icons-svg/lib/asn/WeiboOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-weibo-outlined')
export default class WeiboOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'WeiboOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={WeiboOutlinedSvg} />;
  };
}