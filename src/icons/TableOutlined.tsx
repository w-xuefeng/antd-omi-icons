// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import TableOutlinedSvg from '@ant-design/icons-svg/lib/asn/TableOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-table-outlined')
export default class TableOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'TableOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={TableOutlinedSvg}></AntdIcon>;
  };
}