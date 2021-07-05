// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ConsoleSqlOutlinedSvg from '@ant-design/icons-svg/lib/asn/ConsoleSqlOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-console-sql-outlined')
export default class ConsoleSqlOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ConsoleSqlOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={ConsoleSqlOutlinedSvg}></AntdIcon>;
  };
}