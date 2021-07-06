// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BorderRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderRightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-border-right-outlined')
export default class BorderRightOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'BorderRightOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={BorderRightOutlinedSvg}></AntdIcon>;
  };
}