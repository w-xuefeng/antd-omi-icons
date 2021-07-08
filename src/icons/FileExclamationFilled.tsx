// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileExclamationFilledSvg from '@ant-design/icons-svg/es/asn/FileExclamationFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-file-exclamation-filled')
export default class FileExclamationFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FileExclamationFilled';
  static tagName = 'o-file-exclamation-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FileExclamationFilledSvg} />;
  };
}