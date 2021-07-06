// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import LogoutOutlinedSvg from '@ant-design/icons-svg/lib/asn/LogoutOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-logout-outlined')
export default class LogoutOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'LogoutOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={LogoutOutlinedSvg}></AntdIcon>;
  };
}