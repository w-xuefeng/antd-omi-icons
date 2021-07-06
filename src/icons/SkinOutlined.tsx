// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SkinOutlinedSvg from '@ant-design/icons-svg/lib/asn/SkinOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-skin-outlined')
export default class SkinOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SkinOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={SkinOutlinedSvg}></AntdIcon>;
  };
}