// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FolderOpenTwoToneSvg from '@ant-design/icons-svg/lib/asn/FolderOpenTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-folder-open-two-tone')
export default class FolderOpenTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'FolderOpenTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={FolderOpenTwoToneSvg}></AntdIcon>;
  };
}