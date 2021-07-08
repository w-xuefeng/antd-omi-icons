// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import WhatsAppOutlinedSvg from '@ant-design/icons-svg/es/asn/WhatsAppOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-whats-app-outlined')
export default class WhatsAppOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'WhatsAppOutlined';
  static tagName = 'o-whats-app-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={WhatsAppOutlinedSvg} />;
  };
}