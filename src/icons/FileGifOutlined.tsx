// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileGifOutlinedSvg from '@ant-design/icons-svg/es/asn/FileGifOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-file-gif-outlined')
export default class FileGifOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FileGifOutlined';
  static tagName = 'o-file-gif-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FileGifOutlinedSvg} />;
  };
}