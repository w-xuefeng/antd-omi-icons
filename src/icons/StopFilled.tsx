// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import StopFilledSvg from '@ant-design/icons-svg/lib/asn/StopFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-stop-filled')
export default class StopFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'StopFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={StopFilledSvg}></AntdIcon>;
  };
}