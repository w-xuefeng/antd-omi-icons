// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const FolderTwoToneSvg = {"name":"folder","theme":"twotone"};

@tag('o-folder-two-tone')
export default class FolderTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'FolderTwoTone';
  static tagName = 'o-folder-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FolderTwoToneSvg} />;
  };
}