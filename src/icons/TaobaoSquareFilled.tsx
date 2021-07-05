// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import TaobaoSquareFilledSvg from '@ant-design/icons-svg/lib/asn/TaobaoSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-taobao-square-filled')
export default class TaobaoSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'TaobaoSquareFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={TaobaoSquareFilledSvg}></AntdIcon>;
  };
}