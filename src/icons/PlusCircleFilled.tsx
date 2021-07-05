// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PlusCircleFilledSvg from '@ant-design/icons-svg/lib/asn/PlusCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-plus-circle-filled')
export default class PlusCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'PlusCircleFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={PlusCircleFilledSvg}></AntdIcon>;
  };
}