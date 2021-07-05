// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MessageFilledSvg from '@ant-design/icons-svg/lib/asn/MessageFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-message-filled')
export default class MessageFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'MessageFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={MessageFilledSvg}></AntdIcon>;
  };
}