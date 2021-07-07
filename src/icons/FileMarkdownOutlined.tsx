// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileMarkdownOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileMarkdownOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-file-markdown-outlined')
export default class FileMarkdownOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FileMarkdownOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FileMarkdownOutlinedSvg} />;
  };
}