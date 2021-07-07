// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FolderAddOutlinedSvg from '@ant-design/icons-svg/lib/asn/FolderAddOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-folder-add-outlined')
export default class FolderAddOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FolderAddOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FolderAddOutlinedSvg} />;
  };
}