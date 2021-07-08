// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import WechatOutlinedSvg from '@ant-design/icons-svg/es/asn/WechatOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-wechat-outlined')
export default class WechatOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'WechatOutlined';
  static tagName = 'o-wechat-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={WechatOutlinedSvg} />;
  };
}