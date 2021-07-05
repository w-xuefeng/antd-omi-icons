// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import UpSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/UpSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-up-square-two-tone')
export default class UpSquareTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'UpSquareTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={UpSquareTwoToneSvg}></AntdIcon>;
  };
}