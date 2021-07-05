// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import GoldenFilledSvg from '@ant-design/icons-svg/lib/asn/GoldenFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-golden-filled')
export default class GoldenFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'GoldenFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={GoldenFilledSvg}></AntdIcon>;
  };
}