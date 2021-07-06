// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BulbOutlinedSvg from '@ant-design/icons-svg/lib/asn/BulbOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-bulb-outlined')
export default class BulbOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'BulbOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={BulbOutlinedSvg}></AntdIcon>;
  };
}