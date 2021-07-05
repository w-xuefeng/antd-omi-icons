// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PlusSquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/PlusSquareTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-plus-square-two-tone')
export default class PlusSquareTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'PlusSquareTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={PlusSquareTwoToneSvg}></AntdIcon>;
  };
}