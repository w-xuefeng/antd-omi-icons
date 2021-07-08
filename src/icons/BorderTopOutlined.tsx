// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BorderTopOutlinedSvg from '@ant-design/icons-svg/es/asn/BorderTopOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-border-top-outlined')
export default class BorderTopOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'BorderTopOutlined';
  static tagName = 'o-border-top-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={BorderTopOutlinedSvg} />;
  };
}