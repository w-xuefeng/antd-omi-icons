// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import UserDeleteOutlinedSvg from '@ant-design/icons-svg/lib/asn/UserDeleteOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-user-delete-outlined')
export default class UserDeleteOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'UserDeleteOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={UserDeleteOutlinedSvg}></AntdIcon>;
  };
}