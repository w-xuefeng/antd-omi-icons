// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RobotOutlinedSvg from '@ant-design/icons-svg/lib/asn/RobotOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-robot-outlined')
export default class RobotOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'RobotOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={RobotOutlinedSvg}></AntdIcon>;
  };
}