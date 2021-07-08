// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CaretRightFilledSvg from '@ant-design/icons-svg/es/asn/CaretRightFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-caret-right-filled')
export default class CaretRightFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CaretRightFilled';
  static tagName = 'o-caret-right-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CaretRightFilledSvg} />;
  };
}