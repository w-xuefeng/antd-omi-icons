// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileMarkdownTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileMarkdownTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-file-markdown-two-tone')
export default class FileMarkdownTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'FileMarkdownTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={FileMarkdownTwoToneSvg}></AntdIcon>;
  };
}