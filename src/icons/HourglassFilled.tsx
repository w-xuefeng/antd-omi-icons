// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import HourglassFilledSvg from '@ant-design/icons-svg/es/asn/HourglassFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-hourglass-filled')
export default class HourglassFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'HourglassFilled';
  static tagName = 'o-hourglass-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={HourglassFilledSvg} />;
  };
}