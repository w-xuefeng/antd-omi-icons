// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CarFilledSvg from '@ant-design/icons-svg/es/asn/CarFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-car-filled')
export default class CarFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CarFilled';
  static tagName = 'o-car-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CarFilledSvg} />;
  };
}