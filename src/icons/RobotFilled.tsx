// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RobotFilledSvg from '@ant-design/icons-svg/es/asn/RobotFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-robot-filled')
export default class RobotFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'RobotFilled';
  static tagName = 'o-robot-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={RobotFilledSvg} />;
  };
}