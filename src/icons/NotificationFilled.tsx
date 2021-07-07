// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import NotificationFilledSvg from '@ant-design/icons-svg/lib/asn/NotificationFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-notification-filled')
export default class NotificationFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'NotificationFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={NotificationFilledSvg} />;
  };
}