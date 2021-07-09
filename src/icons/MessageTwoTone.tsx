// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const MessageTwoToneSvg = {"name":"message","theme":"twotone"};

@tag('o-message-two-tone')
export default class MessageTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'MessageTwoTone';
  static tagName = 'o-message-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={MessageTwoToneSvg} />;
  };
}