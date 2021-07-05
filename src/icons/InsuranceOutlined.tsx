// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import InsuranceOutlinedSvg from '@ant-design/icons-svg/lib/asn/InsuranceOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-insurance-outlined')
export default class InsuranceOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'InsuranceOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={InsuranceOutlinedSvg}></AntdIcon>;
  };
}