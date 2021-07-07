// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AccountBookOutlinedSvg from '@ant-design/icons-svg/lib/asn/AccountBookOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-account-book-outlined')
export default class AccountBookOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'AccountBookOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={AccountBookOutlinedSvg} />;
  };
}