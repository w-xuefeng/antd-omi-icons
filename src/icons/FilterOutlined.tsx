// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FilterOutlinedSvg from '@ant-design/icons-svg/lib/asn/FilterOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-filter-outlined')
export default class FilterOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FilterOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={FilterOutlinedSvg}></AntdIcon>;
  };
}