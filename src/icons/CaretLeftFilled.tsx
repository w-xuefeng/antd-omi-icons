// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CaretLeftFilledSvg from '@ant-design/icons-svg/es/asn/CaretLeftFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-caret-left-filled')
export default class CaretLeftFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CaretLeftFilled';
  static tagName = 'o-caret-left-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CaretLeftFilledSvg} />;
  };
}