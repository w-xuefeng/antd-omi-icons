// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import IeSquareFilledSvg from '@ant-design/icons-svg/lib/asn/IeSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-ie-square-filled')
export default class IeSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'IeSquareFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={IeSquareFilledSvg}></AntdIcon>;
  };
}