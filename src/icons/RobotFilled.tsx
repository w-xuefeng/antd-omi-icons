// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RobotFilledSvg from '@ant-design/icons-svg/lib/asn/RobotFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-robot-filled')
export default class RobotFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'RobotFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={RobotFilledSvg}></AntdIcon>;
  };
}