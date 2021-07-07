// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import InsuranceFilledSvg from '@ant-design/icons-svg/lib/asn/InsuranceFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-insurance-filled')
export default class InsuranceFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'InsuranceFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={InsuranceFilledSvg} />;
  };
}