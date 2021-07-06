// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import EyeFilledSvg from '@ant-design/icons-svg/lib/asn/EyeFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-eye-filled')
export default class EyeFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'EyeFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={EyeFilledSvg}></AntdIcon>;
  };
}