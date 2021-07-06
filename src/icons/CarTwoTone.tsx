// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CarTwoToneSvg from '@ant-design/icons-svg/lib/asn/CarTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-car-two-tone')
export default class CarTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'CarTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={CarTwoToneSvg}></AntdIcon>;
  };
}