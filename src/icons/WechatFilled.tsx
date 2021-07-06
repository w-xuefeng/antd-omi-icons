// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import WechatFilledSvg from '@ant-design/icons-svg/lib/asn/WechatFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-wechat-filled')
export default class WechatFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'WechatFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={WechatFilledSvg}></AntdIcon>;
  };
}