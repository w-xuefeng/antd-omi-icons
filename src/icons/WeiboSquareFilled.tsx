// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import WeiboSquareFilledSvg from '@ant-design/icons-svg/lib/asn/WeiboSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-weibo-square-filled')
export default class WeiboSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'WeiboSquareFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={WeiboSquareFilledSvg}></AntdIcon>;
  };
}