// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const FileImageTwoToneSvg = {"name":"file-image","theme":"twotone"};

@tag('o-file-image-two-tone')
export default class FileImageTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'FileImageTwoTone';
  static tagName = 'o-file-image-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FileImageTwoToneSvg} />;
  };
}