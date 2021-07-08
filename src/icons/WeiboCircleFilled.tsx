// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import WeiboCircleFilledSvg from '@ant-design/icons-svg/es/asn/WeiboCircleFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-weibo-circle-filled')
export default class WeiboCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'WeiboCircleFilled';
  static tagName = 'o-weibo-circle-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={WeiboCircleFilledSvg} />;
  };
}