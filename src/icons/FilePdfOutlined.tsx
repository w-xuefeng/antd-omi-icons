// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FilePdfOutlinedSvg from '@ant-design/icons-svg/lib/asn/FilePdfOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-file-pdf-outlined')
export default class FilePdfOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FilePdfOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={FilePdfOutlinedSvg}></AntdIcon>;
  };
}