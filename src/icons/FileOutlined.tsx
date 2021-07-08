// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileOutlinedSvg from '@ant-design/icons-svg/es/asn/FileOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-file-outlined')
export default class FileOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FileOutlined';
  static tagName = 'o-file-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FileOutlinedSvg} />;
  };
}