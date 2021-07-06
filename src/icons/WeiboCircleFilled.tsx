// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import WeiboCircleFilledSvg from '@ant-design/icons-svg/lib/asn/WeiboCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-weibo-circle-filled')
export default class WeiboCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'WeiboCircleFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={WeiboCircleFilledSvg}></AntdIcon>;
  };
}