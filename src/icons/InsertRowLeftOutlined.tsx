// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const InsertRowLeftOutlinedSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"defs","attrs":{},"children":[{"tag":"style","attrs":{}}]},{"tag":"path","attrs":{"d":"M248 112h-80c-4.4 0-8 3.6-8 8v784c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8V120c0-4.4-3.6-8-8-8zm584 0H368c-17.7 0-32 14.9-32 33.3v733.3c0 18.4 14.3 33.3 32 33.3h464c17.7 0 32-14.9 32-33.3V145.3c0-18.4-14.3-33.3-32-33.3zM568 840H408V664h160v176zm0-240H408V424h160v176zm0-240H408V184h160v176zm224 480H632V664h160v176zm0-240H632V424h160v176zm0-240H632V184h160v176z"}}]},"name":"insert-row-left","theme":"outlined"};

@tag('o-insert-row-left-outlined')
export default class InsertRowLeftOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'InsertRowLeftOutlined';
  static tagName = 'o-insert-row-left-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={InsertRowLeftOutlinedSvg} />;
  };
}