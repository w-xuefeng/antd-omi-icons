// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileMarkdownFilledSvg from '@ant-design/icons-svg/lib/asn/FileMarkdownFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-file-markdown-filled')
export default class FileMarkdownFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FileMarkdownFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FileMarkdownFilledSvg} />;
  };
}