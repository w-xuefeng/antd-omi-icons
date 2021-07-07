// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FolderFilledSvg from '@ant-design/icons-svg/lib/asn/FolderFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-folder-filled')
export default class FolderFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FolderFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FolderFilledSvg} />;
  };
}