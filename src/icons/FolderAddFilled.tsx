// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FolderAddFilledSvg from '@ant-design/icons-svg/lib/asn/FolderAddFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-folder-add-filled')
export default class FolderAddFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FolderAddFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={FolderAddFilledSvg}></AntdIcon>;
  };
}