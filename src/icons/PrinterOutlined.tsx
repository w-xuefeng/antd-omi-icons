// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PrinterOutlinedSvg from '@ant-design/icons-svg/es/asn/PrinterOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-printer-outlined')
export default class PrinterOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'PrinterOutlined';
  static tagName = 'o-printer-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PrinterOutlinedSvg} />;
  };
}