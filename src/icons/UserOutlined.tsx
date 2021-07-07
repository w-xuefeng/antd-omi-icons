// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import UserOutlinedSvg from '@ant-design/icons-svg/lib/asn/UserOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-user-outlined')
export default class UserOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'UserOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={UserOutlinedSvg} />;
  };
}