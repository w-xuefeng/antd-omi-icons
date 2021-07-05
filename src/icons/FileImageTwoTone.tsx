// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileImageTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileImageTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-file-image-two-tone')
export default class FileImageTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'FileImageTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={FileImageTwoToneSvg}></AntdIcon>;
  };
}