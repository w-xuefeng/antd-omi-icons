// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import HourglassFilledSvg from '@ant-design/icons-svg/lib/asn/HourglassFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-hourglass-filled')
export default class HourglassFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'HourglassFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={HourglassFilledSvg}></AntdIcon>;
  };
}