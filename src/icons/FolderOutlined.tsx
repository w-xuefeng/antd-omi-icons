// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FolderOutlinedSvg from '@ant-design/icons-svg/lib/asn/FolderOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-folder-outlined')
export default class FolderOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FolderOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={FolderOutlinedSvg}></AntdIcon>;
  };
}