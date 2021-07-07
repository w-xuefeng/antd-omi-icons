// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import InsuranceOutlinedSvg from '@ant-design/icons-svg/lib/asn/InsuranceOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-insurance-outlined')
export default class InsuranceOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'InsuranceOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={InsuranceOutlinedSvg} />;
  };
}