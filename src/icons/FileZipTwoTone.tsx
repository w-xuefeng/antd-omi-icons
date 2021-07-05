// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileZipTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileZipTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-file-zip-two-tone')
export default class FileZipTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'FileZipTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={FileZipTwoToneSvg}></AntdIcon>;
  };
}