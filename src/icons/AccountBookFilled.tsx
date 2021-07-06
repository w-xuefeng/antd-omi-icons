// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AccountBookFilledSvg from '@ant-design/icons-svg/lib/asn/AccountBookFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-account-book-filled')
export default class AccountBookFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'AccountBookFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={AccountBookFilledSvg}></AntdIcon>;
  };
}