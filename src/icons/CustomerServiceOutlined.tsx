// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CustomerServiceOutlinedSvg from '@ant-design/icons-svg/es/asn/CustomerServiceOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-customer-service-outlined')
export default class CustomerServiceOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CustomerServiceOutlined';
  static tagName = 'o-customer-service-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CustomerServiceOutlinedSvg} />;
  };
}