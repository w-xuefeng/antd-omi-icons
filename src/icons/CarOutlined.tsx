// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CarOutlinedSvg from '@ant-design/icons-svg/lib/asn/CarOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-car-outlined')
export default class CarOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CarOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={CarOutlinedSvg}></AntdIcon>;
  };
}