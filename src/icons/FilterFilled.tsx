// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FilterFilledSvg from '@ant-design/icons-svg/lib/asn/FilterFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-filter-filled')
export default class FilterFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FilterFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={FilterFilledSvg}></AntdIcon>;
  };
}