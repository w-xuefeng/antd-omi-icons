// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MessageTwoToneSvg from '@ant-design/icons-svg/es/asn/MessageTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-message-two-tone')
export default class MessageTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'MessageTwoTone';
  static tagName = 'o-message-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={MessageTwoToneSvg} />;
  };
}