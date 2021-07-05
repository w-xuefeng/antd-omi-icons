// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SnippetsTwoToneSvg from '@ant-design/icons-svg/lib/asn/SnippetsTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-snippets-two-tone')
export default class SnippetsTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'SnippetsTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={SnippetsTwoToneSvg}></AntdIcon>;
  };
}