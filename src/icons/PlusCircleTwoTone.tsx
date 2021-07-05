// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PlusCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/PlusCircleTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-plus-circle-two-tone')
export default class PlusCircleTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'PlusCircleTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={PlusCircleTwoToneSvg}></AntdIcon>;
  };
}