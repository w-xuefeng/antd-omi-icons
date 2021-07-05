// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CalculatorFilledSvg from '@ant-design/icons-svg/lib/asn/CalculatorFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-calculator-filled')
export default class CalculatorFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CalculatorFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={CalculatorFilledSvg}></AntdIcon>;
  };
}