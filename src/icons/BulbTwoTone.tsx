// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BulbTwoToneSvg from '@ant-design/icons-svg/lib/asn/BulbTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-bulb-two-tone')
export default class BulbTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'BulbTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={BulbTwoToneSvg}></AntdIcon>;
  };
}