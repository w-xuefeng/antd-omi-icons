// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const NotificationTwoToneSvg = {"name":"notification","theme":"twotone"};

@tag('o-notification-two-tone')
export default class NotificationTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'NotificationTwoTone';
  static tagName = 'o-notification-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={NotificationTwoToneSvg} />;
  };
}