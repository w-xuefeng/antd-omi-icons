// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import VerifiedOutlinedSvg from '@ant-design/icons-svg/lib/asn/VerifiedOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-verified-outlined')
export default class VerifiedOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'VerifiedOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={VerifiedOutlinedSvg}></AntdIcon>;
  };
}