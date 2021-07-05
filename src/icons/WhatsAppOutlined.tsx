// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import WhatsAppOutlinedSvg from '@ant-design/icons-svg/lib/asn/WhatsAppOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-whats-app-outlined')
export default class WhatsAppOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'WhatsAppOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={WhatsAppOutlinedSvg}></AntdIcon>;
  };
}