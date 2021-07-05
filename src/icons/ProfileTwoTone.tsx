// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ProfileTwoToneSvg from '@ant-design/icons-svg/lib/asn/ProfileTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-profile-two-tone')
export default class ProfileTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'ProfileTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={ProfileTwoToneSvg}></AntdIcon>;
  };
}