// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BankFilledSvg from '@ant-design/icons-svg/lib/asn/BankFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-bank-filled')
export default class BankFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'BankFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={BankFilledSvg}></AntdIcon>;
  };
}