// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileImageFilledSvg from '@ant-design/icons-svg/lib/asn/FileImageFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-file-image-filled')
export default class FileImageFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FileImageFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={FileImageFilledSvg}></AntdIcon>;
  };
}