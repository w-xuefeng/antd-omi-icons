// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import HddFilledSvg from '@ant-design/icons-svg/lib/asn/HddFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-hdd-filled')
export default class HddFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'HddFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={HddFilledSvg}></AntdIcon>;
  };
}