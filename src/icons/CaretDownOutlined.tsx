// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CaretDownOutlinedSvg from '@ant-design/icons-svg/lib/asn/CaretDownOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-caret-down-outlined')
export default class CaretDownOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CaretDownOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CaretDownOutlinedSvg} />;
  };
}