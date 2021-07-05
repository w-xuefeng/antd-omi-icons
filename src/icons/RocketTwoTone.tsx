// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RocketTwoToneSvg from '@ant-design/icons-svg/lib/asn/RocketTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-rocket-two-tone')
export default class RocketTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'RocketTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={RocketTwoToneSvg}></AntdIcon>;
  };
}