// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RedEnvelopeOutlinedSvg from '@ant-design/icons-svg/lib/asn/RedEnvelopeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-red-envelope-outlined')
export default class RedEnvelopeOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'RedEnvelopeOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={RedEnvelopeOutlinedSvg}></AntdIcon>;
  };
}