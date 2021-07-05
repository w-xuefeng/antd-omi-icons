// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import GiftOutlinedSvg from '@ant-design/icons-svg/lib/asn/GiftOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-gift-outlined')
export default class GiftOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'GiftOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={GiftOutlinedSvg}></AntdIcon>;
  };
}