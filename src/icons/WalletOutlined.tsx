// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import WalletOutlinedSvg from '@ant-design/icons-svg/lib/asn/WalletOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-wallet-outlined')
export default class WalletOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'WalletOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={WalletOutlinedSvg}></AntdIcon>;
  };
}