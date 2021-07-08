// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CarOutlinedSvg from '@ant-design/icons-svg/es/asn/CarOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-car-outlined')
export default class CarOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CarOutlined';
  static tagName = 'o-car-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CarOutlinedSvg} />;
  };
}