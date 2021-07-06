// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PhoneOutlinedSvg from '@ant-design/icons-svg/lib/asn/PhoneOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-phone-outlined')
export default class PhoneOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'PhoneOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={PhoneOutlinedSvg}></AntdIcon>;
  };
}