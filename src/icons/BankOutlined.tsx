// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BankOutlinedSvg from '@ant-design/icons-svg/lib/asn/BankOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-bank-outlined')
export default class BankOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'BankOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={BankOutlinedSvg}></AntdIcon>;
  };
}