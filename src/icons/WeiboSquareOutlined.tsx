// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import WeiboSquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/WeiboSquareOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-weibo-square-outlined')
export default class WeiboSquareOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'WeiboSquareOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={WeiboSquareOutlinedSvg} />;
  };
}