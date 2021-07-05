// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import EnvironmentTwoToneSvg from '@ant-design/icons-svg/lib/asn/EnvironmentTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-environment-two-tone')
export default class EnvironmentTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'EnvironmentTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={EnvironmentTwoToneSvg}></AntdIcon>;
  };
}