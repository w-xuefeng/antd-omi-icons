// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import GoldFilledSvg from '@ant-design/icons-svg/es/asn/GoldFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-gold-filled')
export default class GoldFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'GoldFilled';
  static tagName = 'o-gold-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={GoldFilledSvg} />;
  };
}