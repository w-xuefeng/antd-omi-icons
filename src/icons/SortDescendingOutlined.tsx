// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SortDescendingOutlinedSvg from '@ant-design/icons-svg/es/asn/SortDescendingOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-sort-descending-outlined')
export default class SortDescendingOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SortDescendingOutlined';
  static tagName = 'o-sort-descending-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SortDescendingOutlinedSvg} />;
  };
}