// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import WalletOutlinedSvg from '@ant-design/icons-svg/es/asn/WalletOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-wallet-outlined')
export default class WalletOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'WalletOutlined';
  static tagName = 'o-wallet-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={WalletOutlinedSvg} />;
  };
}