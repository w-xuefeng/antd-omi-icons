// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BorderLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderLeftOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-border-left-outlined')
export default class BorderLeftOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'BorderLeftOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={BorderLeftOutlinedSvg} />;
  };
}