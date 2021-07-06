// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import LayoutOutlinedSvg from '@ant-design/icons-svg/lib/asn/LayoutOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-layout-outlined')
export default class LayoutOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'LayoutOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={LayoutOutlinedSvg}></AntdIcon>;
  };
}