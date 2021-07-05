// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CaretRightFilledSvg from '@ant-design/icons-svg/lib/asn/CaretRightFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-caret-right-filled')
export default class CaretRightFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CaretRightFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={CaretRightFilledSvg}></AntdIcon>;
  };
}