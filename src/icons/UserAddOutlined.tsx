// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import UserAddOutlinedSvg from '@ant-design/icons-svg/es/asn/UserAddOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-user-add-outlined')
export default class UserAddOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'UserAddOutlined';
  static tagName = 'o-user-add-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={UserAddOutlinedSvg} />;
  };
}