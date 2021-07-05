// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import NotificationTwoToneSvg from '@ant-design/icons-svg/lib/asn/NotificationTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-notification-two-tone')
export default class NotificationTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'NotificationTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={NotificationTwoToneSvg}></AntdIcon>;
  };
}