// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SearchOutlinedSvg from '@ant-design/icons-svg/lib/asn/SearchOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-search-outlined')
export default class SearchOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SearchOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SearchOutlinedSvg} />;
  };
}