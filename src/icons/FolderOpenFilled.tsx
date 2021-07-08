// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FolderOpenFilledSvg from '@ant-design/icons-svg/es/asn/FolderOpenFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-folder-open-filled')
export default class FolderOpenFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FolderOpenFilled';
  static tagName = 'o-folder-open-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FolderOpenFilledSvg} />;
  };
}