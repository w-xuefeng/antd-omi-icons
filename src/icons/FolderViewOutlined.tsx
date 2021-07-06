// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FolderViewOutlinedSvg from '@ant-design/icons-svg/lib/asn/FolderViewOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-folder-view-outlined')
export default class FolderViewOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FolderViewOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={FolderViewOutlinedSvg}></AntdIcon>;
  };
}