// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import LoginOutlinedSvg from '@ant-design/icons-svg/lib/asn/LoginOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-login-outlined')
export default class LoginOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'LoginOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={LoginOutlinedSvg}></AntdIcon>;
  };
}