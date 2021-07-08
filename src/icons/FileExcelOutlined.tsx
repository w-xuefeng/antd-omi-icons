// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileExcelOutlinedSvg from '@ant-design/icons-svg/es/asn/FileExcelOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-file-excel-outlined')
export default class FileExcelOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FileExcelOutlined';
  static tagName = 'o-file-excel-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FileExcelOutlinedSvg} />;
  };
}