// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import HourglassTwoToneSvg from '@ant-design/icons-svg/lib/asn/HourglassTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-hourglass-two-tone')
export default class HourglassTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'HourglassTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={HourglassTwoToneSvg}></AntdIcon>;
  };
}