// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MessageOutlinedSvg from '@ant-design/icons-svg/lib/asn/MessageOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-message-outlined')
export default class MessageOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'MessageOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={MessageOutlinedSvg} />;
  };
}