// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FolderOpenOutlinedSvg from '@ant-design/icons-svg/lib/asn/FolderOpenOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-folder-open-outlined')
export default class FolderOpenOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FolderOpenOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={FolderOpenOutlinedSvg}></AntdIcon>;
  };
}