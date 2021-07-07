// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import TableOutlinedSvg from '@ant-design/icons-svg/lib/asn/TableOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-table-outlined')
export default class TableOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'TableOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={TableOutlinedSvg} />;
  };
}