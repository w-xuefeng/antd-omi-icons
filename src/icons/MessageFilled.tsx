// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MessageFilledSvg from '@ant-design/icons-svg/es/asn/MessageFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-message-filled')
export default class MessageFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'MessageFilled';
  static tagName = 'o-message-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={MessageFilledSvg} />;
  };
}