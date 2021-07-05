// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AndroidOutlinedSvg from '@ant-design/icons-svg/lib/asn/AndroidOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-android-outlined')
export default class AndroidOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'AndroidOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={AndroidOutlinedSvg}></AntdIcon>;
  };
}