// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DollarOutlinedSvg from '@ant-design/icons-svg/es/asn/DollarOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-dollar-outlined')
export default class DollarOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DollarOutlined';
  static tagName = 'o-dollar-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DollarOutlinedSvg} />;
  };
}