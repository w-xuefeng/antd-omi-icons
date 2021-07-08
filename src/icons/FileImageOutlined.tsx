// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileImageOutlinedSvg from '@ant-design/icons-svg/es/asn/FileImageOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-file-image-outlined')
export default class FileImageOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FileImageOutlined';
  static tagName = 'o-file-image-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FileImageOutlinedSvg} />;
  };
}