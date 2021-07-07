// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BankFilledSvg from '@ant-design/icons-svg/lib/asn/BankFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-bank-filled')
export default class BankFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'BankFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={BankFilledSvg} />;
  };
}