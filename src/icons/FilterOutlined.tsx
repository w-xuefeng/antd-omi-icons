// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FilterOutlinedSvg from '@ant-design/icons-svg/es/asn/FilterOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-filter-outlined')
export default class FilterOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FilterOutlined';
  static tagName = 'o-filter-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FilterOutlinedSvg} />;
  };
}