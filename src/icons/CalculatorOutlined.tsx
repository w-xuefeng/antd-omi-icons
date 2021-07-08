// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CalculatorOutlinedSvg from '@ant-design/icons-svg/es/asn/CalculatorOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-calculator-outlined')
export default class CalculatorOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CalculatorOutlined';
  static tagName = 'o-calculator-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CalculatorOutlinedSvg} />;
  };
}