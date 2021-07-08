// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import UserSwitchOutlinedSvg from '@ant-design/icons-svg/es/asn/UserSwitchOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-user-switch-outlined')
export default class UserSwitchOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'UserSwitchOutlined';
  static tagName = 'o-user-switch-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={UserSwitchOutlinedSvg} />;
  };
}