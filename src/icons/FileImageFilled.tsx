// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileImageFilledSvg from '@ant-design/icons-svg/es/asn/FileImageFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-file-image-filled')
export default class FileImageFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FileImageFilled';
  static tagName = 'o-file-image-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FileImageFilledSvg} />;
  };
}