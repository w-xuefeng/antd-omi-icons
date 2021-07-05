// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import WalletTwoToneSvg from '@ant-design/icons-svg/lib/asn/WalletTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-wallet-two-tone')
export default class WalletTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'WalletTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={WalletTwoToneSvg}></AntdIcon>;
  };
}