// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const CalculatorTwoToneSvg = {"name":"calculator","theme":"twotone"};

@tag('o-calculator-two-tone')
export default class CalculatorTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'CalculatorTwoTone';
  static tagName = 'o-calculator-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CalculatorTwoToneSvg} />;
  };
}