// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DatabaseFilledSvg from '@ant-design/icons-svg/lib/asn/DatabaseFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-database-filled')
export default class DatabaseFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'DatabaseFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={DatabaseFilledSvg}></AntdIcon>;
  };
}