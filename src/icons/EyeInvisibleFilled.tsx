// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import EyeInvisibleFilledSvg from '@ant-design/icons-svg/lib/asn/EyeInvisibleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-eye-invisible-filled')
export default class EyeInvisibleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'EyeInvisibleFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={EyeInvisibleFilledSvg}></AntdIcon>;
  };
}