// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DashOutlinedSvg from '@ant-design/icons-svg/es/asn/DashOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-dash-outlined')
export default class DashOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DashOutlined';
  static tagName = 'o-dash-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DashOutlinedSvg} />;
  };
}