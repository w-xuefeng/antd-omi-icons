// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ZhihuSquareFilledSvg from '@ant-design/icons-svg/lib/asn/ZhihuSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-zhihu-square-filled')
export default class ZhihuSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'ZhihuSquareFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={ZhihuSquareFilledSvg}></AntdIcon>;
  };
}