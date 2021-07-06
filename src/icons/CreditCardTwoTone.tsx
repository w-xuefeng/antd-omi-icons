// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CreditCardTwoToneSvg from '@ant-design/icons-svg/lib/asn/CreditCardTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-credit-card-two-tone')
export default class CreditCardTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'CreditCardTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={CreditCardTwoToneSvg}></AntdIcon>;
  };
}