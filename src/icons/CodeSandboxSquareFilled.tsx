// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CodeSandboxSquareFilledSvg from '@ant-design/icons-svg/es/asn/CodeSandboxSquareFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-code-sandbox-square-filled')
export default class CodeSandboxSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CodeSandboxSquareFilled';
  static tagName = 'o-code-sandbox-square-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CodeSandboxSquareFilledSvg} />;
  };
}