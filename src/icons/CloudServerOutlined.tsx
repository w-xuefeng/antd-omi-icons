// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CloudServerOutlinedSvg from '@ant-design/icons-svg/es/asn/CloudServerOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-cloud-server-outlined')
export default class CloudServerOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CloudServerOutlined';
  static tagName = 'o-cloud-server-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CloudServerOutlinedSvg} />;
  };
}