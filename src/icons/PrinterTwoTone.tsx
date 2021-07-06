// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PrinterTwoToneSvg from '@ant-design/icons-svg/lib/asn/PrinterTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-printer-two-tone')
export default class PrinterTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'PrinterTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={PrinterTwoToneSvg}></AntdIcon>;
  };
}