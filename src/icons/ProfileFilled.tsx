// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ProfileFilledSvg from '@ant-design/icons-svg/lib/asn/ProfileFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-profile-filled')
export default class ProfileFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'ProfileFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={ProfileFilledSvg}></AntdIcon>;
  };
}