// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import TwitterSquareFilledSvg from '@ant-design/icons-svg/lib/asn/TwitterSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-twitter-square-filled')
export default class TwitterSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'TwitterSquareFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={TwitterSquareFilledSvg}></AntdIcon>;
  };
}