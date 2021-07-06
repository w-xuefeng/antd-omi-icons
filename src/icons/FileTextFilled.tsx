// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileTextFilledSvg from '@ant-design/icons-svg/lib/asn/FileTextFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-file-text-filled')
export default class FileTextFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FileTextFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={FileTextFilledSvg}></AntdIcon>;
  };
}