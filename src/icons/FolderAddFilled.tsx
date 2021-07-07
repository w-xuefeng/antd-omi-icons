// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FolderAddFilledSvg from '@ant-design/icons-svg/lib/asn/FolderAddFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-folder-add-filled')
export default class FolderAddFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FolderAddFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FolderAddFilledSvg} />;
  };
}