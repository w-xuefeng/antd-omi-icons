// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import WalletFilledSvg from '@ant-design/icons-svg/lib/asn/WalletFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-wallet-filled')
export default class WalletFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'WalletFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={WalletFilledSvg} />;
  };
}