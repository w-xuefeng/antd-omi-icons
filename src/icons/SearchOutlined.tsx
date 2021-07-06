// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SearchOutlinedSvg from '@ant-design/icons-svg/lib/asn/SearchOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-search-outlined')
export default class SearchOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SearchOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={SearchOutlinedSvg}></AntdIcon>;
  };
}