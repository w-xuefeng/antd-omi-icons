// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SplitCellsOutlinedSvg from '@ant-design/icons-svg/es/asn/SplitCellsOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-split-cells-outlined')
export default class SplitCellsOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SplitCellsOutlined';
  static tagName = 'o-split-cells-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SplitCellsOutlinedSvg} />;
  };
}