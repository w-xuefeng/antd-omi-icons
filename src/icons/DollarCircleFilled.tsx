// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DollarCircleFilledSvg from '@ant-design/icons-svg/es/asn/DollarCircleFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-dollar-circle-filled')
export default class DollarCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'DollarCircleFilled';
  static tagName = 'o-dollar-circle-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DollarCircleFilledSvg} />;
  };
}