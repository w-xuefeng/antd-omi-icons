// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CodeTwoToneSvg from '@ant-design/icons-svg/lib/asn/CodeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-code-two-tone')
export default class CodeTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'CodeTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={CodeTwoToneSvg}></AntdIcon>;
  };
}