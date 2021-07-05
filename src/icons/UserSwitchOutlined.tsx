// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import UserSwitchOutlinedSvg from '@ant-design/icons-svg/lib/asn/UserSwitchOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-user-switch-outlined')
export default class UserSwitchOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'UserSwitchOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={UserSwitchOutlinedSvg}></AntdIcon>;
  };
}