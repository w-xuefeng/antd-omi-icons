// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BehanceSquareFilledSvg from '@ant-design/icons-svg/lib/asn/BehanceSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-behance-square-filled')
export default class BehanceSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'BehanceSquareFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={BehanceSquareFilledSvg}></AntdIcon>;
  };
}