// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import NotificationOutlinedSvg from '@ant-design/icons-svg/es/asn/NotificationOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-notification-outlined')
export default class NotificationOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'NotificationOutlined';
  static tagName = 'o-notification-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={NotificationOutlinedSvg} />;
  };
}