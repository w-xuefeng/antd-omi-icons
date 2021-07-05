// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import GoogleOutlinedSvg from '@ant-design/icons-svg/lib/asn/GoogleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-google-outlined')
export default class GoogleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'GoogleOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={GoogleOutlinedSvg}></AntdIcon>;
  };
}