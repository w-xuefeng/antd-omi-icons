// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import HourglassTwoToneSvg from '@ant-design/icons-svg/es/asn/HourglassTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-hourglass-two-tone')
export default class HourglassTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'HourglassTwoTone';
  static tagName = 'o-hourglass-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={HourglassTwoToneSvg} />;
  };
}