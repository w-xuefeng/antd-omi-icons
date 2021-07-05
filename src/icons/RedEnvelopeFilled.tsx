// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RedEnvelopeFilledSvg from '@ant-design/icons-svg/lib/asn/RedEnvelopeFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-red-envelope-filled')
export default class RedEnvelopeFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'RedEnvelopeFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={RedEnvelopeFilledSvg}></AntdIcon>;
  };
}