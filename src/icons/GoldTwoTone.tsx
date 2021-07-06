// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import GoldTwoToneSvg from '@ant-design/icons-svg/lib/asn/GoldTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-gold-two-tone')
export default class GoldTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'GoldTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={GoldTwoToneSvg}></AntdIcon>;
  };
}