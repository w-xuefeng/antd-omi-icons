// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RobotOutlinedSvg from '@ant-design/icons-svg/es/asn/RobotOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-robot-outlined')
export default class RobotOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'RobotOutlined';
  static tagName = 'o-robot-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={RobotOutlinedSvg} />;
  };
}