// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CreditCardTwoToneSvg from '@ant-design/icons-svg/es/asn/CreditCardTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-credit-card-two-tone')
export default class CreditCardTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'CreditCardTwoTone';
  static tagName = 'o-credit-card-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CreditCardTwoToneSvg} />;
  };
}