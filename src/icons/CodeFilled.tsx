// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CodeFilledSvg from '@ant-design/icons-svg/es/asn/CodeFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-code-filled')
export default class CodeFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CodeFilled';
  static tagName = 'o-code-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CodeFilledSvg} />;
  };
}