// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FolderTwoToneSvg from '@ant-design/icons-svg/lib/asn/FolderTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-folder-two-tone')
export default class FolderTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'FolderTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FolderTwoToneSvg} />;
  };
}