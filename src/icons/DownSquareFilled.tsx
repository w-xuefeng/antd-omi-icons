// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DownSquareFilledSvg from '@ant-design/icons-svg/lib/asn/DownSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-down-square-filled')
export default class DownSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'DownSquareFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={DownSquareFilledSvg}></AntdIcon>;
  };
}