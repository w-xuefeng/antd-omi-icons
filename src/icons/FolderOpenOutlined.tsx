// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FolderOpenOutlinedSvg from '@ant-design/icons-svg/es/asn/FolderOpenOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-folder-open-outlined')
export default class FolderOpenOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FolderOpenOutlined';
  static tagName = 'o-folder-open-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FolderOpenOutlinedSvg} />;
  };
}