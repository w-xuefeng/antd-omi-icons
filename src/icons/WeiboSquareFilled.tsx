// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import WeiboSquareFilledSvg from '@ant-design/icons-svg/lib/asn/WeiboSquareFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-weibo-square-filled')
export default class WeiboSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'WeiboSquareFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={WeiboSquareFilledSvg} />;
  };
}