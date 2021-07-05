// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileMarkdownOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileMarkdownOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-file-markdown-outlined')
export default class FileMarkdownOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FileMarkdownOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={FileMarkdownOutlinedSvg}></AntdIcon>;
  };
}