// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DropboxOutlinedSvg from '@ant-design/icons-svg/lib/asn/DropboxOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-dropbox-outlined')
export default class DropboxOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DropboxOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={DropboxOutlinedSvg}></AntdIcon>;
  };
}