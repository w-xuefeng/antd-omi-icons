// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MailFilledSvg from '@ant-design/icons-svg/lib/asn/MailFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-mail-filled')
export default class MailFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'MailFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={MailFilledSvg} />;
  };
}