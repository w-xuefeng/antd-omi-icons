// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CaretDownFilledSvg from '@ant-design/icons-svg/lib/asn/CaretDownFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-caret-down-filled')
export default class CaretDownFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CaretDownFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CaretDownFilledSvg} />;
  };
}