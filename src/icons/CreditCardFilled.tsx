// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CreditCardFilledSvg from '@ant-design/icons-svg/lib/asn/CreditCardFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-credit-card-filled')
export default class CreditCardFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CreditCardFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={CreditCardFilledSvg}></AntdIcon>;
  };
}