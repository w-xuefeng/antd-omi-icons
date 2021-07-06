// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import GatewayOutlinedSvg from '@ant-design/icons-svg/lib/asn/GatewayOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-gateway-outlined')
export default class GatewayOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'GatewayOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={GatewayOutlinedSvg}></AntdIcon>;
  };
}