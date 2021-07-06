// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import EyeOutlinedSvg from '@ant-design/icons-svg/lib/asn/EyeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-eye-outlined')
export default class EyeOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'EyeOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={EyeOutlinedSvg}></AntdIcon>;
  };
}