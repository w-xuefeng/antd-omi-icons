// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileTextFilledSvg from '@ant-design/icons-svg/es/asn/FileTextFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-file-text-filled')
export default class FileTextFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FileTextFilled';
  static tagName = 'o-file-text-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FileTextFilledSvg} />;
  };
}