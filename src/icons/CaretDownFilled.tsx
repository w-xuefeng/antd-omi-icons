// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CaretDownFilledSvg from '@ant-design/icons-svg/lib/asn/CaretDownFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-caret-down-filled')
export default class CaretDownFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CaretDownFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={CaretDownFilledSvg}></AntdIcon>;
  };
}