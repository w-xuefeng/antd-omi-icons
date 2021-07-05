// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AndroidFilledSvg from '@ant-design/icons-svg/lib/asn/AndroidFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-android-filled')
export default class AndroidFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'AndroidFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={AndroidFilledSvg}></AntdIcon>;
  };
}