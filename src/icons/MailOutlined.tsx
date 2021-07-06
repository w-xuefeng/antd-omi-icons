// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MailOutlinedSvg from '@ant-design/icons-svg/lib/asn/MailOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-mail-outlined')
export default class MailOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'MailOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={MailOutlinedSvg}></AntdIcon>;
  };
}