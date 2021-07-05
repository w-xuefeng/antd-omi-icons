// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DatabaseOutlinedSvg from '@ant-design/icons-svg/lib/asn/DatabaseOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-database-outlined')
export default class DatabaseOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DatabaseOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={DatabaseOutlinedSvg}></AntdIcon>;
  };
}