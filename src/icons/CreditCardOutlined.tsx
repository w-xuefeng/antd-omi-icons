// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CreditCardOutlinedSvg from '@ant-design/icons-svg/lib/asn/CreditCardOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-credit-card-outlined')
export default class CreditCardOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CreditCardOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={CreditCardOutlinedSvg}></AntdIcon>;
  };
}