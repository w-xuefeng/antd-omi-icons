// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const FileUnknownTwoToneSvg = {"name":"file-unknown","theme":"twotone"};

@tag('o-file-unknown-two-tone')
export default class FileUnknownTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'FileUnknownTwoTone';
  static tagName = 'o-file-unknown-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FileUnknownTwoToneSvg} />;
  };
}