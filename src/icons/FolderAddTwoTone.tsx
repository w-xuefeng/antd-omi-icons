// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FolderAddTwoToneSvg from '@ant-design/icons-svg/lib/asn/FolderAddTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-folder-add-two-tone')
export default class FolderAddTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'FolderAddTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={FolderAddTwoToneSvg}></AntdIcon>;
  };
}