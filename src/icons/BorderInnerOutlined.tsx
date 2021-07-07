// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BorderInnerOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderInnerOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-border-inner-outlined')
export default class BorderInnerOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'BorderInnerOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={BorderInnerOutlinedSvg} />;
  };
}