// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import EnvironmentFilledSvg from '@ant-design/icons-svg/lib/asn/EnvironmentFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-environment-filled')
export default class EnvironmentFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'EnvironmentFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={EnvironmentFilledSvg}></AntdIcon>;
  };
}