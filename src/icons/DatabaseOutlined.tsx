// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DatabaseOutlinedSvg from '@ant-design/icons-svg/lib/asn/DatabaseOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-database-outlined')
export default class DatabaseOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DatabaseOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DatabaseOutlinedSvg} />;
  };
}