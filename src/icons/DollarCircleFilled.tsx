// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DollarCircleFilledSvg from '@ant-design/icons-svg/lib/asn/DollarCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-dollar-circle-filled')
export default class DollarCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'DollarCircleFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={DollarCircleFilledSvg}></AntdIcon>;
  };
}