// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileAddOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileAddOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-file-add-outlined')
export default class FileAddOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FileAddOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={FileAddOutlinedSvg}></AntdIcon>;
  };
}