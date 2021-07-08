// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SnippetsTwoToneSvg from '@ant-design/icons-svg/es/asn/SnippetsTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-snippets-two-tone')
export default class SnippetsTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'SnippetsTwoTone';
  static tagName = 'o-snippets-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SnippetsTwoToneSvg} />;
  };
}