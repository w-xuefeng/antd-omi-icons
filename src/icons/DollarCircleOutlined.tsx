// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DollarCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/DollarCircleOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-dollar-circle-outlined')
export default class DollarCircleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DollarCircleOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DollarCircleOutlinedSvg} />;
  };
}