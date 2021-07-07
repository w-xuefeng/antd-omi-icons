// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CodeSandboxCircleFilledSvg from '@ant-design/icons-svg/lib/asn/CodeSandboxCircleFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-code-sandbox-circle-filled')
export default class CodeSandboxCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CodeSandboxCircleFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CodeSandboxCircleFilledSvg} />;
  };
}