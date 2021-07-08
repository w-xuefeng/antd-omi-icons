// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ZhihuSquareFilledSvg from '@ant-design/icons-svg/es/asn/ZhihuSquareFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-zhihu-square-filled')
export default class ZhihuSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'ZhihuSquareFilled';
  static tagName = 'o-zhihu-square-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ZhihuSquareFilledSvg} />;
  };
}