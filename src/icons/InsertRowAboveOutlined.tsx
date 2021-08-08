// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const InsertRowAboveOutlinedSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M878.7 336H145.3c-18.4 0-33.3 14.3-33.3 32v464c0 17.7 14.9 32 33.3 32h733.3c18.4 0 33.3-14.3 33.3-32V368c.1-17.7-14.8-32-33.2-32zM360 792H184V632h176v160zm0-224H184V408h176v160zm240 224H424V632h176v160zm0-224H424V408h176v160zm240 224H664V632h176v160zm0-224H664V408h176v160zm64-408H120c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8z"}}]},"name":"insert-row-above","theme":"outlined"};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-insert-row-above-outlined']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-insert-row-above-outlined')
export default class InsertRowAboveOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'InsertRowAboveOutlined';
  static tagName = 'o-insert-row-above-outlined';
  static inheritAttrs = false;
  render(props: Omi.OmiProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={InsertRowAboveOutlinedSvg} />;
  };
}