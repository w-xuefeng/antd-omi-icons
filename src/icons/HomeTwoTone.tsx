// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import HomeTwoToneSvg from '@ant-design/icons-svg/lib/asn/HomeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-home-two-tone')
export default class HomeTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'HomeTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={HomeTwoToneSvg}></AntdIcon>;
  };
}