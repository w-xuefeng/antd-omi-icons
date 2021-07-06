// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FolderTwoToneSvg from '@ant-design/icons-svg/lib/asn/FolderTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-folder-two-tone')
export default class FolderTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'FolderTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={FolderTwoToneSvg}></AntdIcon>;
  };
}