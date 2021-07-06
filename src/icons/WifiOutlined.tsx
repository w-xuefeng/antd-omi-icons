// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import WifiOutlinedSvg from '@ant-design/icons-svg/lib/asn/WifiOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-wifi-outlined')
export default class WifiOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'WifiOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={WifiOutlinedSvg}></AntdIcon>;
  };
}