// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import LinkOutlinedSvg from '@ant-design/icons-svg/es/asn/LinkOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-link-outlined')
export default class LinkOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'LinkOutlined';
  static tagName = 'o-link-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={LinkOutlinedSvg} />;
  };
}