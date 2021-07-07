// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import WalletTwoToneSvg from '@ant-design/icons-svg/lib/asn/WalletTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-wallet-two-tone')
export default class WalletTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'WalletTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={WalletTwoToneSvg} />;
  };
}