// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const InsertRowBelowOutlinedSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M904 768H120c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8zm-25.3-608H145.3c-18.4 0-33.3 14.3-33.3 32v464c0 17.7 14.9 32 33.3 32h733.3c18.4 0 33.3-14.3 33.3-32V192c.1-17.7-14.8-32-33.2-32zM360 616H184V456h176v160zm0-224H184V232h176v160zm240 224H424V456h176v160zm0-224H424V232h176v160zm240 224H664V456h176v160zm0-224H664V232h176v160z"}}]},"name":"insert-row-below","theme":"outlined"};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-insert-row-below-outlined']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-insert-row-below-outlined')
export default class InsertRowBelowOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'InsertRowBelowOutlined';
  static tagName = 'o-insert-row-below-outlined';
  static inheritAttrs = false;
  render(props: Omi.OmiProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={InsertRowBelowOutlinedSvg} />;
  };
}