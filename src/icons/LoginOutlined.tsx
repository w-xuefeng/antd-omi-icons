// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import LoginOutlinedSvg from '@ant-design/icons-svg/es/asn/LoginOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-login-outlined')
export default class LoginOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'LoginOutlined';
  static tagName = 'o-login-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={LoginOutlinedSvg} />;
  };
}