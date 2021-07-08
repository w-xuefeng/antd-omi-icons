// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SortAscendingOutlinedSvg from '@ant-design/icons-svg/es/asn/SortAscendingOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-sort-ascending-outlined')
export default class SortAscendingOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SortAscendingOutlined';
  static tagName = 'o-sort-ascending-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SortAscendingOutlinedSvg} />;
  };
}