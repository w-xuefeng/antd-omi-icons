// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AlipaySquareFilledSvg from '@ant-design/icons-svg/lib/asn/AlipaySquareFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-alipay-square-filled')
export default class AlipaySquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'AlipaySquareFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={AlipaySquareFilledSvg} />;
  };
}