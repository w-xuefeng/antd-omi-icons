// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileExcelFilledSvg from '@ant-design/icons-svg/lib/asn/FileExcelFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-file-excel-filled')
export default class FileExcelFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FileExcelFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={FileExcelFilledSvg}></AntdIcon>;
  };
}