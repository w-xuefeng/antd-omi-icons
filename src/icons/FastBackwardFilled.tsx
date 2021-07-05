// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FastBackwardFilledSvg from '@ant-design/icons-svg/lib/asn/FastBackwardFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-fast-backward-filled')
export default class FastBackwardFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FastBackwardFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={FastBackwardFilledSvg}></AntdIcon>;
  };
}