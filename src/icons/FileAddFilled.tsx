// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileAddFilledSvg from '@ant-design/icons-svg/es/asn/FileAddFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-file-add-filled')
export default class FileAddFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FileAddFilled';
  static tagName = 'o-file-add-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FileAddFilledSvg} />;
  };
}