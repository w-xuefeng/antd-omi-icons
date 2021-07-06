// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CustomerServiceOutlinedSvg from '@ant-design/icons-svg/lib/asn/CustomerServiceOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-customer-service-outlined')
export default class CustomerServiceOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CustomerServiceOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={CustomerServiceOutlinedSvg}></AntdIcon>;
  };
}