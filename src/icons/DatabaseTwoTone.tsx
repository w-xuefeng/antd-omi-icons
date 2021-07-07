// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DatabaseTwoToneSvg from '@ant-design/icons-svg/lib/asn/DatabaseTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-database-two-tone')
export default class DatabaseTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'DatabaseTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DatabaseTwoToneSvg} />;
  };
}