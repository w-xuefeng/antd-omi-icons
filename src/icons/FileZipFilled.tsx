// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileZipFilledSvg from '@ant-design/icons-svg/lib/asn/FileZipFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-file-zip-filled')
export default class FileZipFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FileZipFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={FileZipFilledSvg}></AntdIcon>;
  };
}