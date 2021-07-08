// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileWordOutlinedSvg from '@ant-design/icons-svg/es/asn/FileWordOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-file-word-outlined')
export default class FileWordOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FileWordOutlined';
  static tagName = 'o-file-word-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FileWordOutlinedSvg} />;
  };
}