// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FilterTwoToneSvg from '@ant-design/icons-svg/lib/asn/FilterTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-filter-two-tone')
export default class FilterTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'FilterTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={FilterTwoToneSvg}></AntdIcon>;
  };
}