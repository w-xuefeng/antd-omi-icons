// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DollarCircleTwoToneSvg from '@ant-design/icons-svg/es/asn/DollarCircleTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-dollar-circle-two-tone')
export default class DollarCircleTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'DollarCircleTwoTone';
  static tagName = 'o-dollar-circle-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DollarCircleTwoToneSvg} />;
  };
}