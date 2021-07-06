// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AppleOutlinedSvg from '@ant-design/icons-svg/lib/asn/AppleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-apple-outlined')
export default class AppleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'AppleOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={AppleOutlinedSvg}></AntdIcon>;
  };
}