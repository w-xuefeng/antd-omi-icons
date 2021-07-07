// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BellOutlinedSvg from '@ant-design/icons-svg/lib/asn/BellOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-bell-outlined')
export default class BellOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'BellOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={BellOutlinedSvg} />;
  };
}