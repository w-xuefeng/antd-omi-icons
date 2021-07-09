// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const FilterTwoToneSvg = {"name":"filter","theme":"twotone"};

@tag('o-filter-two-tone')
export default class FilterTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'FilterTwoTone';
  static tagName = 'o-filter-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FilterTwoToneSvg} />;
  };
}