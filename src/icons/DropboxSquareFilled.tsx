// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DropboxSquareFilledSvg from '@ant-design/icons-svg/lib/asn/DropboxSquareFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-dropbox-square-filled')
export default class DropboxSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'DropboxSquareFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DropboxSquareFilledSvg} />;
  };
}