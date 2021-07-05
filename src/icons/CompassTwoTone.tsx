// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CompassTwoToneSvg from '@ant-design/icons-svg/lib/asn/CompassTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-compass-two-tone')
export default class CompassTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'CompassTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={CompassTwoToneSvg}></AntdIcon>;
  };
}