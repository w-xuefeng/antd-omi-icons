// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const LineOutlinedSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M904 476H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}}]},"name":"line","theme":"outlined"};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-line-outlined']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-line-outlined')
export default class LineOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'LineOutlined';
  static tagName = 'o-line-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={LineOutlinedSvg} />;
  };
}