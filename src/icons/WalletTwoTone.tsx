// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const WalletTwoToneSvg = {"name":"wallet","theme":"twotone"};

@tag('o-wallet-two-tone')
export default class WalletTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'WalletTwoTone';
  static tagName = 'o-wallet-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={WalletTwoToneSvg} />;
  };
}