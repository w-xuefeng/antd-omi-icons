// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ColumnWidthOutlinedSvg from '@ant-design/icons-svg/lib/asn/ColumnWidthOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-column-width-outlined')
export default class ColumnWidthOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ColumnWidthOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ColumnWidthOutlinedSvg} />;
  };
}