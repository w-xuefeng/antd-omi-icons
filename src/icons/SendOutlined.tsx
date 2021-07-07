// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SendOutlinedSvg from '@ant-design/icons-svg/lib/asn/SendOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-send-outlined')
export default class SendOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SendOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SendOutlinedSvg} />;
  };
}