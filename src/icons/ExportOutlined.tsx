// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ExportOutlinedSvg from '@ant-design/icons-svg/lib/asn/ExportOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-export-outlined')
export default class ExportOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ExportOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={ExportOutlinedSvg}></AntdIcon>;
  };
}