// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import InstagramFilledSvg from '@ant-design/icons-svg/lib/asn/InstagramFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-instagram-filled')
export default class InstagramFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'InstagramFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={InstagramFilledSvg}></AntdIcon>;
  };
}