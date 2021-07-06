// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import LinkedinFilledSvg from '@ant-design/icons-svg/lib/asn/LinkedinFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-linkedin-filled')
export default class LinkedinFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'LinkedinFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={LinkedinFilledSvg}></AntdIcon>;
  };
}