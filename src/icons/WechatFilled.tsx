// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import WechatFilledSvg from '@ant-design/icons-svg/lib/asn/WechatFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-wechat-filled')
export default class WechatFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'WechatFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={WechatFilledSvg} />;
  };
}