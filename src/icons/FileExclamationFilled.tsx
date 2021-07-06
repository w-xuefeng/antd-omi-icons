// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileExclamationFilledSvg from '@ant-design/icons-svg/lib/asn/FileExclamationFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-file-exclamation-filled')
export default class FileExclamationFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FileExclamationFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={FileExclamationFilledSvg}></AntdIcon>;
  };
}