// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BorderOuterOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderOuterOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-border-outer-outlined')
export default class BorderOuterOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'BorderOuterOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={BorderOuterOutlinedSvg} />;
  };
}