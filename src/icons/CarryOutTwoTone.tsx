// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CarryOutTwoToneSvg from '@ant-design/icons-svg/lib/asn/CarryOutTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-carry-out-two-tone')
export default class CarryOutTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'CarryOutTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={CarryOutTwoToneSvg}></AntdIcon>;
  };
}