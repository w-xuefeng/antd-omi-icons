// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import WeiboCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/WeiboCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-weibo-circle-outlined')
export default class WeiboCircleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'WeiboCircleOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={WeiboCircleOutlinedSvg}></AntdIcon>;
  };
}