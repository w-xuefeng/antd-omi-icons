// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CodeSandboxOutlinedSvg from '@ant-design/icons-svg/lib/asn/CodeSandboxOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-code-sandbox-outlined')
export default class CodeSandboxOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CodeSandboxOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={CodeSandboxOutlinedSvg}></AntdIcon>;
  };
}