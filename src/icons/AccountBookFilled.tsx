// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AccountBookFilledSvg from '@ant-design/icons-svg/es/asn/AccountBookFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-account-book-filled')
export default class AccountBookFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'AccountBookFilled';
  static tagName = 'o-account-book-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={AccountBookFilledSvg} />;
  };
}