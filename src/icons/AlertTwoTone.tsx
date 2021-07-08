// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AlertTwoToneSvg from '@ant-design/icons-svg/es/asn/AlertTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-alert-two-tone')
export default class AlertTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'AlertTwoTone';
  static tagName = 'o-alert-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={AlertTwoToneSvg} />;
  };
}