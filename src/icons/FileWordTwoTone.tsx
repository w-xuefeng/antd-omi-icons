// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const FileWordTwoToneSvg = {"name":"file-word","theme":"twotone"};

@tag('o-file-word-two-tone')
export default class FileWordTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'FileWordTwoTone';
  static tagName = 'o-file-word-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FileWordTwoToneSvg} />;
  };
}