// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MailTwoToneSvg from '@ant-design/icons-svg/lib/asn/MailTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-mail-two-tone')
export default class MailTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'MailTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={MailTwoToneSvg} />;
  };
}