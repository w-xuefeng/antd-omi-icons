// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import InsuranceFilledSvg from '@ant-design/icons-svg/lib/asn/InsuranceFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-insurance-filled')
export default class InsuranceFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'InsuranceFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={InsuranceFilledSvg}></AntdIcon>;
  };
}