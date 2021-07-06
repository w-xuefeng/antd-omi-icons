// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AccountBookOutlinedSvg from '@ant-design/icons-svg/lib/asn/AccountBookOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-account-book-outlined')
export default class AccountBookOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'AccountBookOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={AccountBookOutlinedSvg}></AntdIcon>;
  };
}