// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import GatewayOutlinedSvg from '@ant-design/icons-svg/es/asn/GatewayOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-gateway-outlined')
export default class GatewayOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'GatewayOutlined';
  static tagName = 'o-gateway-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={GatewayOutlinedSvg} />;
  };
}