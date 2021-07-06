// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CalculatorTwoToneSvg from '@ant-design/icons-svg/lib/asn/CalculatorTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-calculator-two-tone')
export default class CalculatorTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'CalculatorTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={CalculatorTwoToneSvg}></AntdIcon>;
  };
}