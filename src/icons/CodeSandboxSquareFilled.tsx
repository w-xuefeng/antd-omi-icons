// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CodeSandboxSquareFilledSvg from '@ant-design/icons-svg/lib/asn/CodeSandboxSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-code-sandbox-square-filled')
export default class CodeSandboxSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CodeSandboxSquareFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={CodeSandboxSquareFilledSvg}></AntdIcon>;
  };
}