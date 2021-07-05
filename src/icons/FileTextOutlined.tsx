// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileTextOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileTextOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-file-text-outlined')
export default class FileTextOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FileTextOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={FileTextOutlinedSvg}></AntdIcon>;
  };
}