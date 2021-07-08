// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileJpgOutlinedSvg from '@ant-design/icons-svg/es/asn/FileJpgOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-file-jpg-outlined')
export default class FileJpgOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FileJpgOutlined';
  static tagName = 'o-file-jpg-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FileJpgOutlinedSvg} />;
  };
}