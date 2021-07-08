// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileSyncOutlinedSvg from '@ant-design/icons-svg/es/asn/FileSyncOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-file-sync-outlined')
export default class FileSyncOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FileSyncOutlined';
  static tagName = 'o-file-sync-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FileSyncOutlinedSvg} />;
  };
}