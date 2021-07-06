// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BulbFilledSvg from '@ant-design/icons-svg/lib/asn/BulbFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-bulb-filled')
export default class BulbFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'BulbFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={BulbFilledSvg}></AntdIcon>;
  };
}