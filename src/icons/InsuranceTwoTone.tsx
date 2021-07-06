// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import InsuranceTwoToneSvg from '@ant-design/icons-svg/lib/asn/InsuranceTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-insurance-two-tone')
export default class InsuranceTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'InsuranceTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={InsuranceTwoToneSvg}></AntdIcon>;
  };
}