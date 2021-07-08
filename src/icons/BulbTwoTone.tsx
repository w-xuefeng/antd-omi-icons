// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BulbTwoToneSvg from '@ant-design/icons-svg/es/asn/BulbTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-bulb-two-tone')
export default class BulbTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'BulbTwoTone';
  static tagName = 'o-bulb-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={BulbTwoToneSvg} />;
  };
}