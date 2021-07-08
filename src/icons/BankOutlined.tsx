// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BankOutlinedSvg from '@ant-design/icons-svg/es/asn/BankOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-bank-outlined')
export default class BankOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'BankOutlined';
  static tagName = 'o-bank-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={BankOutlinedSvg} />;
  };
}