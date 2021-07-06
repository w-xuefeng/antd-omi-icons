// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BorderLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderLeftOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-border-left-outlined')
export default class BorderLeftOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'BorderLeftOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={BorderLeftOutlinedSvg}></AntdIcon>;
  };
}