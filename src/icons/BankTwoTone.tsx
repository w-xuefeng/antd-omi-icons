// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BankTwoToneSvg from '@ant-design/icons-svg/lib/asn/BankTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-bank-two-tone')
export default class BankTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'BankTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={BankTwoToneSvg} />;
  };
}