// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileAddOutlinedSvg from '@ant-design/icons-svg/es/asn/FileAddOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-file-add-outlined')
export default class FileAddOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FileAddOutlined';
  static tagName = 'o-file-add-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FileAddOutlinedSvg} />;
  };
}