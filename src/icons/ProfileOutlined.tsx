// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ProfileOutlinedSvg from '@ant-design/icons-svg/es/asn/ProfileOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-profile-outlined')
export default class ProfileOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ProfileOutlined';
  static tagName = 'o-profile-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ProfileOutlinedSvg} />;
  };
}