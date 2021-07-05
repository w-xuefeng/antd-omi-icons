// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CalculatorOutlinedSvg from '@ant-design/icons-svg/lib/asn/CalculatorOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-calculator-outlined')
export default class CalculatorOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CalculatorOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={CalculatorOutlinedSvg}></AntdIcon>;
  };
}