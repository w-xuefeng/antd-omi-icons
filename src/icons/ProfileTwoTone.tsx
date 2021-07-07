// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ProfileTwoToneSvg from '@ant-design/icons-svg/lib/asn/ProfileTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-profile-two-tone')
export default class ProfileTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'ProfileTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ProfileTwoToneSvg} />;
  };
}