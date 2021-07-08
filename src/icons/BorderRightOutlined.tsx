// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BorderRightOutlinedSvg from '@ant-design/icons-svg/es/asn/BorderRightOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-border-right-outlined')
export default class BorderRightOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'BorderRightOutlined';
  static tagName = 'o-border-right-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={BorderRightOutlinedSvg} />;
  };
}