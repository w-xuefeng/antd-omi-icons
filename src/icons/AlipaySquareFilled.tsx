// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AlipaySquareFilledSvg from '@ant-design/icons-svg/lib/asn/AlipaySquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-alipay-square-filled')
export default class AlipaySquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'AlipaySquareFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={AlipaySquareFilledSvg}></AntdIcon>;
  };
}