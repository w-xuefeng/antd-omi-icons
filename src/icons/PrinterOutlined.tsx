// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PrinterOutlinedSvg from '@ant-design/icons-svg/lib/asn/PrinterOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-printer-outlined')
export default class PrinterOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'PrinterOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={PrinterOutlinedSvg}></AntdIcon>;
  };
}