// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const PlaySquareOutlinedSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M442.3 677.6l199.4-156.7a11.3 11.3 0 000-17.7L442.3 346.4c-7.4-5.8-18.3-.6-18.3 8.8v313.5c0 9.4 10.9 14.7 18.3 8.9z"}},{"tag":"path","attrs":{"d":"M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"}}]},"name":"play-square","theme":"outlined"};

@tag('o-play-square-outlined')
export default class PlaySquareOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'PlaySquareOutlined';
  static tagName = 'o-play-square-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={PlaySquareOutlinedSvg} />;
  };
}