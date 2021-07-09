// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const FileAddTwoToneSvg = {"name":"file-add","theme":"twotone"};

@tag('o-file-add-two-tone')
export default class FileAddTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'FileAddTwoTone';
  static tagName = 'o-file-add-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FileAddTwoToneSvg} />;
  };
}