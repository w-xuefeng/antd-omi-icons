// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CloudServerOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloudServerOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-cloud-server-outlined')
export default class CloudServerOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CloudServerOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={CloudServerOutlinedSvg}></AntdIcon>;
  };
}