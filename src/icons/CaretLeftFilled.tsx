// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CaretLeftFilledSvg from '@ant-design/icons-svg/lib/asn/CaretLeftFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-caret-left-filled')
export default class CaretLeftFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CaretLeftFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={CaretLeftFilledSvg}></AntdIcon>;
  };
}