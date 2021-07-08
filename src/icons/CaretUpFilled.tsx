// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CaretUpFilledSvg from '@ant-design/icons-svg/es/asn/CaretUpFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-caret-up-filled')
export default class CaretUpFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CaretUpFilled';
  static tagName = 'o-caret-up-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CaretUpFilledSvg} />;
  };
}