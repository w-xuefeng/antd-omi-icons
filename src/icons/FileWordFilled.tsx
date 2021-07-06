// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileWordFilledSvg from '@ant-design/icons-svg/lib/asn/FileWordFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-file-word-filled')
export default class FileWordFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FileWordFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={FileWordFilledSvg}></AntdIcon>;
  };
}