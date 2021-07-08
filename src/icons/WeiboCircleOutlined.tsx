// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import WeiboCircleOutlinedSvg from '@ant-design/icons-svg/es/asn/WeiboCircleOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-weibo-circle-outlined')
export default class WeiboCircleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'WeiboCircleOutlined';
  static tagName = 'o-weibo-circle-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={WeiboCircleOutlinedSvg} />;
  };
}