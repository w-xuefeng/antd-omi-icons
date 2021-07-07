// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import GiftTwoToneSvg from '@ant-design/icons-svg/lib/asn/GiftTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-gift-two-tone')
export default class GiftTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'GiftTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={GiftTwoToneSvg} />;
  };
}