// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import GiftFilledSvg from '@ant-design/icons-svg/lib/asn/GiftFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-gift-filled')
export default class GiftFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'GiftFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={GiftFilledSvg}></AntdIcon>;
  };
}