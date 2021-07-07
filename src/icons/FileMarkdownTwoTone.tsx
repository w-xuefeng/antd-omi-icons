// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileMarkdownTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileMarkdownTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-file-markdown-two-tone')
export default class FileMarkdownTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'FileMarkdownTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FileMarkdownTwoToneSvg} />;
  };
}