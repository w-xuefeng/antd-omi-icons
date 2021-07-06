// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import NotificationOutlinedSvg from '@ant-design/icons-svg/lib/asn/NotificationOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-notification-outlined')
export default class NotificationOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'NotificationOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={NotificationOutlinedSvg}></AntdIcon>;
  };
}