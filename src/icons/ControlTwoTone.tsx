// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ControlTwoToneSvg from '@ant-design/icons-svg/es/asn/ControlTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-control-two-tone')
export default class ControlTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'ControlTwoTone';
  static tagName = 'o-control-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ControlTwoToneSvg} />;
  };
}