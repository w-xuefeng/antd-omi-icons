// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import GoldFilledSvg from '@ant-design/icons-svg/lib/asn/GoldFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-gold-filled')
export default class GoldFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'GoldFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={GoldFilledSvg}></AntdIcon>;
  };
}