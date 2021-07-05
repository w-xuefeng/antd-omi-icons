// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ForwardFilledSvg from '@ant-design/icons-svg/lib/asn/ForwardFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-forward-filled')
export default class ForwardFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'ForwardFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={ForwardFilledSvg}></AntdIcon>;
  };
}