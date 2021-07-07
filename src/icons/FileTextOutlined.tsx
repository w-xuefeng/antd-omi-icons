// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileTextOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileTextOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-file-text-outlined')
export default class FileTextOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FileTextOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FileTextOutlinedSvg} />;
  };
}