// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DropboxOutlinedSvg from '@ant-design/icons-svg/es/asn/DropboxOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-dropbox-outlined')
export default class DropboxOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DropboxOutlined';
  static tagName = 'o-dropbox-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DropboxOutlinedSvg} />;
  };
}