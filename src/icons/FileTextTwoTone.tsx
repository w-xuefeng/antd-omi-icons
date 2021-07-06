// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileTextTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileTextTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-file-text-two-tone')
export default class FileTextTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'FileTextTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={FileTextTwoToneSvg}></AntdIcon>;
  };
}