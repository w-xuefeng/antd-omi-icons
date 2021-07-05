// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import InboxOutlinedSvg from '@ant-design/icons-svg/lib/asn/InboxOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-inbox-outlined')
export default class InboxOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'InboxOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={InboxOutlinedSvg}></AntdIcon>;
  };
}