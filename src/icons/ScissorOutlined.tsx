// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ScissorOutlinedSvg from '@ant-design/icons-svg/es/asn/ScissorOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-scissor-outlined')
export default class ScissorOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ScissorOutlined';
  static tagName = 'o-scissor-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ScissorOutlinedSvg} />;
  };
}