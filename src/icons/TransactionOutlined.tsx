// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import TransactionOutlinedSvg from '@ant-design/icons-svg/lib/asn/TransactionOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-transaction-outlined')
export default class TransactionOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'TransactionOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={TransactionOutlinedSvg} />;
  };
}