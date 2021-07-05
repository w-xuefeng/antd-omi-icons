// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AccountBookTwoToneSvg from '@ant-design/icons-svg/lib/asn/AccountBookTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-account-book-two-tone')
export default class AccountBookTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'AccountBookTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={AccountBookTwoToneSvg}></AntdIcon>;
  };
}