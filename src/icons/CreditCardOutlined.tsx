// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CreditCardOutlinedSvg from '@ant-design/icons-svg/es/asn/CreditCardOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-credit-card-outlined')
export default class CreditCardOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CreditCardOutlined';
  static tagName = 'o-credit-card-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CreditCardOutlinedSvg} />;
  };
}