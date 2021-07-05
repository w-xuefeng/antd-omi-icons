// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileSyncOutlinedSvg from '@ant-design/icons-svg/lib/asn/FileSyncOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-file-sync-outlined')
export default class FileSyncOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FileSyncOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={FileSyncOutlinedSvg}></AntdIcon>;
  };
}