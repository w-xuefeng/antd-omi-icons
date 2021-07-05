// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RightSquareFilledSvg from '@ant-design/icons-svg/lib/asn/RightSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-right-square-filled')
export default class RightSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'RightSquareFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={RightSquareFilledSvg}></AntdIcon>;
  };
}