// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import WifiOutlinedSvg from '@ant-design/icons-svg/es/asn/WifiOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-wifi-outlined')
export default class WifiOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'WifiOutlined';
  static tagName = 'o-wifi-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={WifiOutlinedSvg} />;
  };
}