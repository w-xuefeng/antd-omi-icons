// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import GoldOutlinedSvg from '@ant-design/icons-svg/es/asn/GoldOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-gold-outlined')
export default class GoldOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'GoldOutlined';
  static tagName = 'o-gold-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={GoldOutlinedSvg} />;
  };
}