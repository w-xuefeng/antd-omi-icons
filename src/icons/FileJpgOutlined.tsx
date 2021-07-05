// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileJpgOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileJpgOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-file-jpg-outlined')
export default class FileJpgOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FileJpgOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={FileJpgOutlinedSvg}></AntdIcon>;
  };
}