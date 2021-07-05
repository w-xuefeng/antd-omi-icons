// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MobileTwoToneSvg from '@ant-design/icons-svg/lib/asn/MobileTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-mobile-two-tone')
export default class MobileTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'MobileTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={MobileTwoToneSvg}></AntdIcon>;
  };
}