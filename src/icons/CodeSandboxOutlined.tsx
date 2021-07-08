// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CodeSandboxOutlinedSvg from '@ant-design/icons-svg/es/asn/CodeSandboxOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-code-sandbox-outlined')
export default class CodeSandboxOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CodeSandboxOutlined';
  static tagName = 'o-code-sandbox-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CodeSandboxOutlinedSvg} />;
  };
}