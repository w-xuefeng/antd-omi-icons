// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const FormatPainterFilledSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M840 192h-56v-72c0-13.3-10.7-24-24-24H168c-13.3 0-24 10.7-24 24v272c0 13.3 10.7 24 24 24h592c13.3 0 24-10.7 24-24V256h32v200H465c-22.1 0-40 17.9-40 40v136h-44c-4.4 0-8 3.6-8 8v228c0 1.1.2 2.2.6 3.1-.4 1.6-.6 3.2-.6 4.9 0 46.4 37.6 84 84 84s84-37.6 84-84c0-1.7-.2-3.3-.6-4.9.4-1 .6-2 .6-3.1V640c0-4.4-3.6-8-8-8h-44V520h351c22.1 0 40-17.9 40-40V232c0-22.1-17.9-40-40-40z"}}]},"name":"format-painter","theme":"filled"};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-format-painter-filled']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-format-painter-filled')
export default class FormatPainterFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FormatPainterFilled';
  static tagName = 'o-format-painter-filled';
  static inheritAttrs = false;
  render(props: Omi.OmiProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={FormatPainterFilledSvg} />;
  };
}