// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CalculatorFilledSvg from '@ant-design/icons-svg/es/asn/CalculatorFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-calculator-filled')
export default class CalculatorFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CalculatorFilled';
  static tagName = 'o-calculator-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CalculatorFilledSvg} />;
  };
}