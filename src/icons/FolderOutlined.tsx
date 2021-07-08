// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FolderOutlinedSvg from '@ant-design/icons-svg/es/asn/FolderOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-folder-outlined')
export default class FolderOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FolderOutlined';
  static tagName = 'o-folder-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FolderOutlinedSvg} />;
  };
}