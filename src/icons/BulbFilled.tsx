// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BulbFilledSvg from '@ant-design/icons-svg/es/asn/BulbFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-bulb-filled')
export default class BulbFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'BulbFilled';
  static tagName = 'o-bulb-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={BulbFilledSvg} />;
  };
}