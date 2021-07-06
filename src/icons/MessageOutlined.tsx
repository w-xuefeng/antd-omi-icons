// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MessageOutlinedSvg from '@ant-design/icons-svg/lib/asn/MessageOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-message-outlined')
export default class MessageOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'MessageOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={MessageOutlinedSvg}></AntdIcon>;
  };
}