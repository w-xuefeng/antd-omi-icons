// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import UserDeleteOutlinedSvg from '@ant-design/icons-svg/es/asn/UserDeleteOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-user-delete-outlined')
export default class UserDeleteOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'UserDeleteOutlined';
  static tagName = 'o-user-delete-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={UserDeleteOutlinedSvg} />;
  };
}