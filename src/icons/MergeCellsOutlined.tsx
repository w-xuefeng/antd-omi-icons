// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MergeCellsOutlinedSvg from '@ant-design/icons-svg/lib/asn/MergeCellsOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-merge-cells-outlined')
export default class MergeCellsOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'MergeCellsOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={MergeCellsOutlinedSvg}></AntdIcon>;
  };
}