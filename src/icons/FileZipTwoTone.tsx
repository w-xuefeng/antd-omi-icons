// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const FileZipTwoToneSvg = {"name":"file-zip","theme":"twotone"};

@tag('o-file-zip-two-tone')
export default class FileZipTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'FileZipTwoTone';
  static tagName = 'o-file-zip-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FileZipTwoToneSvg} />;
  };
}