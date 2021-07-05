// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CheckSquareFilledSvg from '@ant-design/icons-svg/lib/asn/CheckSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-check-square-filled')
export default class CheckSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CheckSquareFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={CheckSquareFilledSvg}></AntdIcon>;
  };
}