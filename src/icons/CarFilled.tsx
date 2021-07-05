// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CarFilledSvg from '@ant-design/icons-svg/lib/asn/CarFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-car-filled')
export default class CarFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CarFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={CarFilledSvg}></AntdIcon>;
  };
}