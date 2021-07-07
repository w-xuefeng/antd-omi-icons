// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CodeOutlinedSvg from '@ant-design/icons-svg/lib/asn/CodeOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-code-outlined')
export default class CodeOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CodeOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CodeOutlinedSvg} />;
  };
}