// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CustomerServiceTwoToneSvg from '@ant-design/icons-svg/lib/asn/CustomerServiceTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-customer-service-two-tone')
export default class CustomerServiceTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'CustomerServiceTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CustomerServiceTwoToneSvg} />;
  };
}