// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileImageOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileImageOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-file-image-outlined')
export default class FileImageOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FileImageOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={FileImageOutlinedSvg}></AntdIcon>;
  };
}