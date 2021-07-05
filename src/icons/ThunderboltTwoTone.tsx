// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ThunderboltTwoToneSvg from '@ant-design/icons-svg/lib/asn/ThunderboltTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-thunderbolt-two-tone')
export default class ThunderboltTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'ThunderboltTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={ThunderboltTwoToneSvg}></AntdIcon>;
  };
}