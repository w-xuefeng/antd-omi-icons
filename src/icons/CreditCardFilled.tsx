// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CreditCardFilledSvg from '@ant-design/icons-svg/lib/asn/CreditCardFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-credit-card-filled')
export default class CreditCardFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CreditCardFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CreditCardFilledSvg} />;
  };
}