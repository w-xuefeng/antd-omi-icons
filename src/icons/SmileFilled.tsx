// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SmileFilledSvg from '@ant-design/icons-svg/lib/asn/SmileFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-smile-filled')
export default class SmileFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'SmileFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={SmileFilledSvg}></AntdIcon>;
  };
}