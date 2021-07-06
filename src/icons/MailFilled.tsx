// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MailFilledSvg from '@ant-design/icons-svg/lib/asn/MailFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-mail-filled')
export default class MailFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'MailFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={MailFilledSvg}></AntdIcon>;
  };
}