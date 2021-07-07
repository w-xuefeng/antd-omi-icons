// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ColumnHeightOutlinedSvg from '@ant-design/icons-svg/lib/asn/ColumnHeightOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-column-height-outlined')
export default class ColumnHeightOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ColumnHeightOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ColumnHeightOutlinedSvg} />;
  };
}