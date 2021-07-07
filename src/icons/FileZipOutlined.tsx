// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileZipOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileZipOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-file-zip-outlined')
export default class FileZipOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FileZipOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FileZipOutlinedSvg} />;
  };
}