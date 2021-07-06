// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import TransactionOutlinedSvg from '@ant-design/icons-svg/lib/asn/TransactionOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-transaction-outlined')
export default class TransactionOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'TransactionOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={TransactionOutlinedSvg}></AntdIcon>;
  };
}