// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import GiftTwoToneSvg from '@ant-design/icons-svg/lib/asn/GiftTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-gift-two-tone')
export default class GiftTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'GiftTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={GiftTwoToneSvg}></AntdIcon>;
  };
}