// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FilterFilledSvg from '@ant-design/icons-svg/es/asn/FilterFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-filter-filled')
export default class FilterFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FilterFilled';
  static tagName = 'o-filter-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FilterFilledSvg} />;
  };
}