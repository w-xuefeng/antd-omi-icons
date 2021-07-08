// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import InsuranceTwoToneSvg from '@ant-design/icons-svg/es/asn/InsuranceTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-insurance-two-tone')
export default class InsuranceTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'InsuranceTwoTone';
  static tagName = 'o-insurance-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={InsuranceTwoToneSvg} />;
  };
}