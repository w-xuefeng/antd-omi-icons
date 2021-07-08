// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ConsoleSqlOutlinedSvg from '@ant-design/icons-svg/es/asn/ConsoleSqlOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-console-sql-outlined')
export default class ConsoleSqlOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ConsoleSqlOutlined';
  static tagName = 'o-console-sql-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ConsoleSqlOutlinedSvg} />;
  };
}