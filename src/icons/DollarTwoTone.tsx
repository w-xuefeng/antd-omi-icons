// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DollarTwoToneSvg from '@ant-design/icons-svg/es/asn/DollarTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-dollar-two-tone')
export default class DollarTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'DollarTwoTone';
  static tagName = 'o-dollar-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DollarTwoToneSvg} />;
  };
}