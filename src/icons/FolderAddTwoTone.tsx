// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const FolderAddTwoToneSvg = {"name":"folder-add","theme":"twotone"};

@tag('o-folder-add-two-tone')
export default class FolderAddTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'FolderAddTwoTone';
  static tagName = 'o-folder-add-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FolderAddTwoToneSvg} />;
  };
}