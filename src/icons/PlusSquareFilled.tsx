// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PlusSquareFilledSvg from '@ant-design/icons-svg/lib/asn/PlusSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-plus-square-filled')
export default class PlusSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'PlusSquareFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={PlusSquareFilledSvg}></AntdIcon>;
  };
}