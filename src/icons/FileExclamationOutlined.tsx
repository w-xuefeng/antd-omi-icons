// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileExclamationOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileExclamationOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-file-exclamation-outlined')
export default class FileExclamationOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FileExclamationOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FileExclamationOutlinedSvg} />;
  };
}