// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import LeftSquareFilledSvg from '@ant-design/icons-svg/lib/asn/LeftSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-left-square-filled')
export default class LeftSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'LeftSquareFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={LeftSquareFilledSvg}></AntdIcon>;
  };
}