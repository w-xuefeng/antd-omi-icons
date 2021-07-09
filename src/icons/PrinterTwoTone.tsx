// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const PrinterTwoToneSvg = {"name":"printer","theme":"twotone"};

@tag('o-printer-two-tone')
export default class PrinterTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'PrinterTwoTone';
  static tagName = 'o-printer-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PrinterTwoToneSvg} />;
  };
}