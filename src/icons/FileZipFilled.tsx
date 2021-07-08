// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileZipFilledSvg from '@ant-design/icons-svg/es/asn/FileZipFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-file-zip-filled')
export default class FileZipFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FileZipFilled';
  static tagName = 'o-file-zip-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FileZipFilledSvg} />;
  };
}