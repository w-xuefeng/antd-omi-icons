// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const FilterOutlinedSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M880.1 154H143.9c-24.5 0-39.8 26.7-27.5 48L349 597.4V838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V597.4L907.7 202c12.2-21.3-3.1-48-27.6-48zM603.4 798H420.6V642h182.9v156zm9.6-236.6l-9.5 16.6h-183l-9.5-16.6L212.7 226h598.6L613 561.4z"}}]},"name":"filter","theme":"outlined"};

@tag('o-filter-outlined')
export default class FilterOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FilterOutlined';
  static tagName = 'o-filter-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={FilterOutlinedSvg} />;
  };
}