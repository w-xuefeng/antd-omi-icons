// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const FileExcelTwoToneSvg = {"name":"file-excel","theme":"twotone"};

@tag('o-file-excel-two-tone')
export default class FileExcelTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'FileExcelTwoTone';
  static tagName = 'o-file-excel-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FileExcelTwoToneSvg} />;
  };
}