// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AccountBookTwoToneSvg from '@ant-design/icons-svg/es/asn/AccountBookTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-account-book-two-tone')
export default class AccountBookTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'AccountBookTwoTone';
  static tagName = 'o-account-book-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={AccountBookTwoToneSvg} />;
  };
}