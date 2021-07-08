// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ProfileFilledSvg from '@ant-design/icons-svg/es/asn/ProfileFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-profile-filled')
export default class ProfileFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'ProfileFilled';
  static tagName = 'o-profile-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ProfileFilledSvg} />;
  };
}