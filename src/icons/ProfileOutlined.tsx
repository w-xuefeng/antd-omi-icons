// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ProfileOutlinedSvg from '@ant-design/icons-svg/lib/asn/ProfileOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-profile-outlined')
export default class ProfileOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ProfileOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={ProfileOutlinedSvg}></AntdIcon>;
  };
}