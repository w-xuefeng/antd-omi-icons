// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MergeCellsOutlinedSvg from '@ant-design/icons-svg/es/asn/MergeCellsOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-merge-cells-outlined')
export default class MergeCellsOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'MergeCellsOutlined';
  static tagName = 'o-merge-cells-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={MergeCellsOutlinedSvg} />;
  };
}