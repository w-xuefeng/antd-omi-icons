// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import LikeTwoToneSvg from '@ant-design/icons-svg/lib/asn/LikeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-like-two-tone')
export default class LikeTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'LikeTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={LikeTwoToneSvg}></AntdIcon>;
  };
}