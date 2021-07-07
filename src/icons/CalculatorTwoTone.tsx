// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CalculatorTwoToneSvg from '@ant-design/icons-svg/lib/asn/CalculatorTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-calculator-two-tone')
export default class CalculatorTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'CalculatorTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CalculatorTwoToneSvg} />;
  };
}