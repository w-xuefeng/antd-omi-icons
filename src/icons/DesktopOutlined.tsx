// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DesktopOutlinedSvg from '@ant-design/icons-svg/lib/asn/DesktopOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-desktop-outlined')
export default class DesktopOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DesktopOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={DesktopOutlinedSvg}></AntdIcon>;
  };
}