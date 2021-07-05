// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import EyeInvisibleOutlinedSvg from '@ant-design/icons-svg/lib/asn/EyeInvisibleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-eye-invisible-outlined')
export default class EyeInvisibleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'EyeInvisibleOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={EyeInvisibleOutlinedSvg}></AntdIcon>;
  };
}