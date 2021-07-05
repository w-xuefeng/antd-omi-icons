// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileExcelOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileExcelOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-file-excel-outlined')
export default class FileExcelOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FileExcelOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={FileExcelOutlinedSvg}></AntdIcon>;
  };
}