// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FolderFilledSvg from '@ant-design/icons-svg/lib/asn/FolderFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-folder-filled')
export default class FolderFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FolderFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={FolderFilledSvg}></AntdIcon>;
  };
}