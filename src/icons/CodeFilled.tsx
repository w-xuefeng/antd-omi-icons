// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CodeFilledSvg from '@ant-design/icons-svg/lib/asn/CodeFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-code-filled')
export default class CodeFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CodeFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={CodeFilledSvg}></AntdIcon>;
  };
}