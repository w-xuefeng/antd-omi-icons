// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DatabaseFilledSvg from '@ant-design/icons-svg/es/asn/DatabaseFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-database-filled')
export default class DatabaseFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'DatabaseFilled';
  static tagName = 'o-database-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DatabaseFilledSvg} />;
  };
}