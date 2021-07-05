// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CodeSandboxCircleFilledSvg from '@ant-design/icons-svg/lib/asn/CodeSandboxCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-code-sandbox-circle-filled')
export default class CodeSandboxCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CodeSandboxCircleFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={CodeSandboxCircleFilledSvg}></AntdIcon>;
  };
}