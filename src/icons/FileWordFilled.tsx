// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileWordFilledSvg from '@ant-design/icons-svg/es/asn/FileWordFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-file-word-filled')
export default class FileWordFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FileWordFilled';
  static tagName = 'o-file-word-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FileWordFilledSvg} />;
  };
}