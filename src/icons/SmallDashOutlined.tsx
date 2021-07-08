// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SmallDashOutlinedSvg from '@ant-design/icons-svg/es/asn/SmallDashOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-small-dash-outlined')
export default class SmallDashOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SmallDashOutlined';
  static tagName = 'o-small-dash-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SmallDashOutlinedSvg} />;
  };
}