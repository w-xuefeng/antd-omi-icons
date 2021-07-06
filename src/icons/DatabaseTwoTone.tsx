// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DatabaseTwoToneSvg from '@ant-design/icons-svg/lib/asn/DatabaseTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-database-two-tone')
export default class DatabaseTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'DatabaseTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={DatabaseTwoToneSvg}></AntdIcon>;
  };
}