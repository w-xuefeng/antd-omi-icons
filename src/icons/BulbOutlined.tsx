// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BulbOutlinedSvg from '@ant-design/icons-svg/lib/asn/BulbOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-bulb-outlined')
export default class BulbOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'BulbOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={BulbOutlinedSvg} />;
  };
}