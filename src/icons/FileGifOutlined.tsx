// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileGifOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileGifOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-file-gif-outlined')
export default class FileGifOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FileGifOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={FileGifOutlinedSvg}></AntdIcon>;
  };
}