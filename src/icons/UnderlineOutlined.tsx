// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import UnderlineOutlinedSvg from '@ant-design/icons-svg/es/asn/UnderlineOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-underline-outlined')
export default class UnderlineOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'UnderlineOutlined';
  static tagName = 'o-underline-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={UnderlineOutlinedSvg} />;
  };
}