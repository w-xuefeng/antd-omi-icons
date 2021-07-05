// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AppleFilledSvg from '@ant-design/icons-svg/lib/asn/AppleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-apple-filled')
export default class AppleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'AppleFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={AppleFilledSvg}></AntdIcon>;
  };
}