// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileUnknownOutlinedSvg from '@ant-design/icons-svg/es/asn/FileUnknownOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-file-unknown-outlined')
export default class FileUnknownOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FileUnknownOutlined';
  static tagName = 'o-file-unknown-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FileUnknownOutlinedSvg} />;
  };
}