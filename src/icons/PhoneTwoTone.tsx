// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PhoneTwoToneSvg from '@ant-design/icons-svg/lib/asn/PhoneTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-phone-two-tone')
export default class PhoneTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'PhoneTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={PhoneTwoToneSvg}></AntdIcon>;
  };
}