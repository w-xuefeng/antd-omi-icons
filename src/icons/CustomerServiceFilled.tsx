// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CustomerServiceFilledSvg from '@ant-design/icons-svg/lib/asn/CustomerServiceFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-customer-service-filled')
export default class CustomerServiceFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CustomerServiceFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CustomerServiceFilledSvg} />;
  };
}