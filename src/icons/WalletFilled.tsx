// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import WalletFilledSvg from '@ant-design/icons-svg/lib/asn/WalletFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-wallet-filled')
export default class WalletFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'WalletFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={WalletFilledSvg}></AntdIcon>;
  };
}