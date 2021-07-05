// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CompassFilledSvg from '@ant-design/icons-svg/lib/asn/CompassFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-compass-filled')
export default class CompassFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CompassFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={CompassFilledSvg}></AntdIcon>;
  };
}