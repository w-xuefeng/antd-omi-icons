// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ItalicOutlinedSvg from '@ant-design/icons-svg/es/asn/ItalicOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-italic-outlined')
export default class ItalicOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ItalicOutlined';
  static tagName = 'o-italic-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ItalicOutlinedSvg} />;
  };
}