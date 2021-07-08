// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import InboxOutlinedSvg from '@ant-design/icons-svg/es/asn/InboxOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-inbox-outlined')
export default class InboxOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'InboxOutlined';
  static tagName = 'o-inbox-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={InboxOutlinedSvg} />;
  };
}