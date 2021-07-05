// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PrinterFilledSvg from '@ant-design/icons-svg/lib/asn/PrinterFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-printer-filled')
export default class PrinterFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'PrinterFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={PrinterFilledSvg}></AntdIcon>;
  };
}