// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-file-outlined')
export default class FileOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FileOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={FileOutlinedSvg}></AntdIcon>;
  };
}